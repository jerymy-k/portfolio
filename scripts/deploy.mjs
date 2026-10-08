/**
 * Publishes the built site (dist/) to GitHub Pages.
 *
 * The site is served from the main branch of jerymy-k/jerymy-k.github.io,
 * which carries the custom domain elkerymy.me. This script builds the site,
 * replaces that repository's content with dist/ and pushes one commit.
 *
 *   npm run deploy              build and publish
 *   npm run deploy -- --dry-run build and prepare the commit, but do not push
 */
import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const PAGES_REPO = 'https://github.com/jerymy-k/jerymy-k.github.io.git'
const BRANCH = 'main'
/** Files of the Pages repository that the deploy must never delete. */
const KEEP = new Set(['.git', 'README.md'])

const dryRun = process.argv.includes('--dry-run')
const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'dist')

function run(command, args, cwd = root) {
  // shell:true lets Windows find npm.cmd; the arguments here contain no user input.
  return execFileSync(command, args, { cwd, stdio: ['ignore', 'pipe', 'inherit'], shell: command === 'npm' })
    .toString()
    .trim()
}

console.log('1/4 Building the site')
run('npm', ['run', 'build'])
if (!existsSync(join(dist, 'index.html')) || !existsSync(join(dist, 'CNAME'))) {
  throw new Error('dist/ is incomplete: index.html or CNAME is missing.')
}

console.log('2/4 Fetching the Pages repository')
const work = mkdtempSync(join(tmpdir(), 'portfolio-deploy-'))
try {
  run('git', ['clone', '--quiet', '--depth', '1', '--branch', BRANCH, PAGES_REPO, work])

  console.log('3/4 Replacing its content with dist/')
  for (const entry of readdirSync(work)) {
    if (!KEEP.has(entry)) rmSync(join(work, entry), { recursive: true, force: true })
  }
  cpSync(dist, work, { recursive: true })
  run('git', ['add', '--all'], work)

  if (run('git', ['status', '--porcelain'], work) === '') {
    console.log('Nothing changed: the published site is already up to date.')
  } else {
    const source = run('git', ['rev-parse', '--short', 'HEAD'])
    run('git', ['commit', '--quiet', '-m', `deploy: portfolio ${source}`], work)
    if (dryRun) {
      console.log(`4/4 Dry run: commit prepared in ${work}, nothing pushed.`)
      console.log(run('git', ['show', '--stat', '--format=%h %s', 'HEAD'], work))
    } else {
      console.log('4/4 Pushing')
      run('git', ['push', '--quiet', 'origin', BRANCH], work)
      console.log('Published. GitHub Pages updates https://elkerymy.me within a minute or two.')
    }
  }
} finally {
  if (!dryRun) rmSync(work, { recursive: true, force: true })
}
