/**
 * All the text of the site, in French and in English.
 * To update the portfolio, edit this file: the components only do layout.
 */

export type Lang = 'fr' | 'en'

export type ProjectKind = 'ai' | 'web'

export type Project = {
  id: string
  name: string
  kind: ProjectKind
  date: string
  tagline: string
  description: string
  metrics?: { value: string; label: string }[]
  stack: string[]
  repo: string
  demo?: string
}

export type Content = {
  meta: { title: string }
  nav: {
    experience: string
    projects: string
    skills: string
    contact: string
    openMenu: string
    closeMenu: string
    skip: string
    language: string
    themeToLight: string
    themeToDark: string
  }
  hero: {
    role: string
    location: string
    intro: string
    availability: string
    seeProjects: string
    downloadCv: string
    portraitAlt: string
  }
  about: {
    title: string
    lead: string
    body: string
    facts: { label: string; value: string }[]
  }
  experience: {
    title: string
    role: string
    company: string
    period: string
    summary: string
    items: string[]
    stackLabel: string
    stack: string[]
    logCaption: string
    educationTitle: string
    education: { period: string; title: string; detail: string }[]
  }
  projects: {
    title: string
    intro: string
    filterLabel: string
    filters: Record<'all' | ProjectKind, string>
    kinds: Record<ProjectKind, string>
    code: string
    demo: string
    stackLabel: string
    moreTitle: string
    featured: Project[]
    more: Project[]
    pipeline: { caption: string; steps: { name: string; detail: string }[] }
    figures: { deliveryeta: string; deliveryetaAlt: string; eduhub: string; eduhubAlt: string }
  }
  risk: {
    title: string
    caption: string
    tempMax: string
    precipitation: string
    windSpeed: string
    windGusts: string
    condition: string
    conditions: Record<'normal' | 'fog' | 'storm', string>
    presetsLabel: string
    presets: { calm: string; heatwave: string; storm: string }
    result: string
    outOf: string
    levels: Record<'low' | 'moderate' | 'high' | 'very_high' | 'extreme', string>
    components: { temp: string; precip: string; wind: string; floor: string }
    floorNote: string
  }
  skills: {
    title: string
    intro: string
    groups: { name: string; items: string[] }[]
  }
  contact: {
    title: string[]
    body: string
    emailLabel: string
    cv: string
    footer: string
    source: string
  }
}

const GH = 'https://github.com/jerymy-k'

export const links = {
  github: GH,
  linkedin: 'https://www.linkedin.com/in/mohamed-elkerymy-7aa179376/',
  email: 'karimimoha0@gmail.com',
  cv: './Mohamed_Elkerymy_CV.pdf',
  source: `${GH}/portfolio`,
}

/** A few of my real commits on the Wijha repository (messages kept as written). */
export const commits: { date: string; message: string }[] = [
  { date: '2026-06-08', message: 'feat(auth): implement AuthService and Form Requests' },
  { date: '2026-06-08', message: 'feat(core): implement database seeder for moroccan geography' },
  { date: '2026-06-09', message: 'feat(host): implement real interactive leaflet map with distance validation' },
  { date: '2026-06-10', message: 'feat: secure JWT token storage with HttpOnly cookies and CORS support' },
  { date: '2026-06-11', message: 'feat(backend): implement listing calendar and host API controllers' },
  { date: '2026-06-23', message: 'feat: implement automated waitlist promotion system' },
  { date: '2026-06-23', message: 'feat: add browse page for displaying search results' },
  { date: '2026-06-29', message: 'feat(messaging): implement real-time websockets, global unread badges, and fix chat UI bugs' },
]

const fr: Content = {
  meta: { title: 'Mohamed Elkerymy — Développeur Full Stack & IA' },
  nav: {
    experience: 'Parcours',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    skip: 'Aller au contenu',
    language: 'Langue',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
  },
  hero: {
    role: 'Développeur Full Stack & IA',
    location: 'Agadir, Maroc',
    intro:
      "Je conçois des applications web complètes et des pipelines de Machine Learning, de la donnée brute jusqu'à l'interface.",
    availability: "À la recherche d'un stage en développement Full Stack ou en IA",
    seeProjects: 'Voir les projets',
    downloadCv: 'Télécharger le CV',
    portraitAlt: 'Portrait de Mohamed Elkerymy',
  },
  about: {
    title: 'À propos',
    lead: "Étudiant en deuxième année à YouCode (UM6P), je me spécialise en développement IA après une première année consacrée au web Full Stack.",
    body: "J'aime mener un projet jusqu'au bout\u00a0: nettoyer les données, entraîner et comparer des modèles, puis les exposer dans une API et une interface que quelqu'un peut vraiment utiliser. À l'été 2026, j'ai passé deux mois en stage chez JNF Production sur Wijha.ma, une plateforme touristique en Next.js et Laravel.",
    facts: [
      { label: 'Ville', value: 'Agadir, Maroc' },
      { label: 'Formation', value: 'YouCode – UM6P, 2e année, spécialisation Dev-AI' },
      { label: 'Recherche', value: 'Stage en développement Full Stack ou en IA' },
      { label: 'Langues', value: 'Tamazight, arabe, français, anglais' },
    ],
  },
  experience: {
    title: 'Parcours',
    role: 'Stagiaire Développeur Full Stack',
    company: 'JNF Production, Safi',
    period: 'Juin – août 2026, 2 mois en présentiel',
    summary:
      "J'ai travaillé sur Wijha.ma, une plateforme d'expériences, d'événements et d'activités touristiques, côté front-end comme côté back-end.",
    items: [
      'Front-end complet en Next.js (App Router), TypeScript et Tailwind CSS\u00a0: landing page, recherche avec filtres avancés, pages de détail, tunnel de réservation, espaces voyageur, hôte et administrateur, mode sombre.',
      "API REST Laravel en architecture modulaire (Auth, Core, Listing, Booking, Payment, Message)\u00a0: authentification JWT en cookies HttpOnly, connexion Google (OAuth), vérification OTP, gestion des rôles.",
      "Parcours hôte\u00a0: création d'annonce en 10 étapes avec carte interactive Leaflet, envoi de photos, calendrier des disponibilités et liste d'attente automatisée.",
      'Messagerie en temps réel (WebSockets avec Pusher et Laravel Echo), favoris, billets à QR code et scanner de contrôle pour les hôtes.',
      'Tests fonctionnels PHPUnit sur les modules Auth et Core, travail en équipe avec Git\u00a0: branches par fonctionnalité, pull requests, commits conventionnels.',
    ],
    stackLabel: 'Stack',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Leaflet', 'Laravel', 'JWT', 'Pusher'],
    logCaption: 'Extrait de mes 130 commits environ sur le dépôt du projet, entre le 8 juin et le 4 juillet 2026.',
    educationTitle: 'Formation',
    education: [
      {
        period: '2026 – présent',
        title: 'YouCode – UM6P, Safi\u00a0: 2e année',
        detail: 'Spécialisation Dev-AI\u00a0: Python, Machine Learning et data engineering.',
      },
      {
        period: '2025 – 2026',
        title: 'YouCode – UM6P, Safi\u00a0: 1re année',
        detail: 'Développement web Full Stack\u00a0: HTML, CSS, JavaScript, PHP, Laravel, SQL, React.',
      },
    ],
  },
  projects: {
    title: 'Projets',
    intro: 'Une sélection parmi plus de 20 projets. Le code de chacun est public sur GitHub.',
    filterLabel: 'Filtrer les projets',
    filters: { all: 'Tous', ai: 'IA & Data', web: 'Full Stack' },
    kinds: { ai: 'IA & Data', web: 'Full Stack' },
    code: 'Code sur GitHub',
    demo: 'Démo en ligne',
    stackLabel: 'Stack',
    moreTitle: 'Autres projets',
    featured: [
      {
        id: 'si-prd',
        name: 'SI-PRD',
        kind: 'ai',
        date: 'Octobre 2026',
        tagline: 'Prédiction du risque de diabète',
        description:
          "Une chaîne de Machine Learning complète sur des données cliniques, du notebook jusqu'à l'outil utilisé par le praticien\u00a0: le modèle est entraîné, suivi dans MLflow, servi par une API et consulté dans une interface.",
        metrics: [
          { value: '94\u00a0%', label: "d'accuracy sur le jeu de test" },
          { value: '3', label: 'modèles comparés' },
        ],
        stack: ['Python', 'scikit-learn', 'imbalanced-learn', 'MLflow', 'FastAPI', 'Streamlit', 'Docker'],
        repo: `${GH}/SI-PRD`,
      },
      {
        id: 'meteorisk',
        name: 'MeteoRisk',
        kind: 'ai',
        date: 'Septembre 2026',
        tagline: 'Pipeline de données météo',
        description:
          "Un pipeline en médaillon (Bronze, Silver, Gold) orchestré par un DAG Airflow quotidien. Il récupère les prévisions Open-Meteo de 120 villes marocaines, les nettoie, calcule un score de risque météo par ville et par jour pour anticiper les retards de livraison, puis charge le tout dans PostgreSQL pour un dashboard Streamlit.",
        metrics: [
          { value: '120', label: 'villes marocaines suivies' },
          { value: '7\u00a0jours', label: 'de prévisions par ville' },
        ],
        stack: ['Python', 'pandas', 'Apache Airflow', 'PostgreSQL', 'SQLAlchemy', 'Streamlit', 'Docker'],
        repo: `${GH}/MeteoRisk`,
      },
      {
        id: 'deliveryeta',
        name: 'DeliveryETA',
        kind: 'ai',
        date: 'Septembre 2026',
        tagline: 'Prédiction du temps de livraison',
        description:
          "Un modèle de régression entraîné sur 45\u00a0593 commandes réelles\u00a0: nettoyage, feature engineering (distance haversine, heure de pointe, trafic), comparaison de quatre modèles et optimisation de XGBoost par GridSearchCV. Une application Streamlit estime ensuite une livraison en temps réel.",
        metrics: [
          { value: '0,82', label: 'R² sur le jeu de test' },
          { value: '3,1\u00a0min', label: "d'erreur absolue moyenne" },
        ],
        stack: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Streamlit', 'uv'],
        repo: `${GH}/DeliveryETA`,
      },
      {
        id: 'eduhub',
        name: 'EduHub',
        kind: 'web',
        date: 'Avril 2026',
        tagline: 'Plateforme de gestion scolaire',
        description:
          "Mon projet fil rouge de première année\u00a0: une application web à quatre rôles (administrateur, enseignant, élève, parent) pour gérer les classes et les comptes, saisir les notes par activité, suivre les absences avec des justificatifs validés par l'administration et écrire aux parents par e-mail. Cahier des charges, conception UML et maquettes Figma compris.",
        metrics: [{ value: '4', label: 'rôles avec leurs propres espaces' }],
        stack: ['Laravel', 'Blade', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'Docker'],
        repo: `${GH}/EduHub`,
      },
    ],
    more: [
      {
        id: 'ceninfo',
        name: 'CenInfo',
        kind: 'web',
        date: '2026',
        tagline: 'Découverte de films et de séries',
        description:
          "Recherche via l'API OMDb, bandes-annonces TMDB, comptes utilisateurs et favoris enregistrés avec Supabase, défilement infini.",
        stack: ['React', 'Vite', 'Supabase', 'OMDb', 'TMDB'],
        repo: `${GH}/CenInfo`,
        demo: 'https://ceninfo.up.railway.app/',
      },
      {
        id: 'cinehall',
        name: 'CinéHall',
        kind: 'web',
        date: '2026',
        tagline: 'Réservation de billets de cinéma',
        description:
          "Projet d'équipe. API Laravel pour les salles, les séances et les réservations (sièges VIP et couple, expiration automatique), tickets PDF avec QR code, et front-end React avec paiement Stripe.",
        stack: ['Laravel', 'JWT', 'Swagger', 'React', 'Stripe'],
        repo: `${GH}/CineHall`,
      },
      {
        id: 'marocexplore',
        name: 'MarocExplore',
        kind: 'web',
        date: '2026',
        tagline: "API d'itinéraires touristiques",
        description:
          "API REST pour créer, rechercher, filtrer et partager des itinéraires à plusieurs destinations, avec favoris, authentification JWT, documentation Swagger et tests PHPUnit.",
        stack: ['Laravel', 'MySQL', 'JWT', 'Swagger', 'PHPUnit'],
        repo: `${GH}/MarocExplore`,
      },
      {
        id: 'skycast',
        name: 'SkyCast',
        kind: 'web',
        date: '2026',
        tagline: 'Application météo',
        description:
          "Météo actuelle, prévisions heure par heure et sur 7 jours, graphique des températures, géolocalisation, interface en français et en anglais.",
        stack: ['React', 'Vite', 'Open-Meteo', 'Recharts'],
        repo: `${GH}/SkyCast`,
      },
    ],
    pipeline: {
      caption: 'Les étapes de la chaîne, dans leur ordre d’exécution.',
      steps: [
        { name: 'Imputation KNN', detail: 'les zéros impossibles deviennent des valeurs estimées' },
        { name: 'K-Means', detail: 'segmentation des patients en profils de risque' },
        { name: 'SMOTE', detail: "rééquilibrage des classes, sur l'entraînement uniquement" },
        { name: 'Random Forest', detail: 'optimisé par GridSearchCV après comparaison de 3 modèles' },
        { name: 'MLflow', detail: 'suivi des expériences et registre de modèles' },
        { name: 'FastAPI', detail: 'le modèle est servi par un endpoint /predict' },
        { name: 'Streamlit', detail: 'formulaire du praticien et affichage du risque' },
      ],
    },
    figures: {
      deliveryeta: "Capture de l'application Streamlit\u00a0: prédictions du modèle face aux temps réels.",
      deliveryetaAlt:
        "Page « Model Precision » de l'application\u00a0: MAE 3,10 min, RMSE 3,89 min, R² 0,8242 et nuage de points des prédictions face aux valeurs réelles.",
      eduhub: "Capture de l'application\u00a0: l'accueil de l'espace élève.",
      eduhubAlt: "Écran d'accueil de l'espace élève d'EduHub avec son menu latéral.",
    },
  },
  risk: {
    title: 'Essayez le score de risque',
    caption:
      'Le même calcul que dans le pipeline\u00a0: 30\u00a0% température, 40\u00a0% précipitations, 30\u00a0% vent, avec un plancher quand les conditions deviennent dangereuses.',
    tempMax: 'Température maximale',
    precipitation: 'Précipitations',
    windSpeed: 'Vent',
    windGusts: 'Rafales',
    condition: 'Conditions',
    conditions: { normal: 'Normales', fog: 'Brouillard', storm: 'Orage' },
    presetsLabel: 'Exemples',
    presets: { calm: 'Journée calme', heatwave: 'Canicule', storm: 'Orage' },
    result: 'Score de risque',
    outOf: 'sur 100',
    levels: {
      low: 'Faible',
      moderate: 'Modéré',
      high: 'Élevé',
      very_high: 'Très élevé',
      extreme: 'Extrême',
    },
    components: { temp: 'Température', precip: 'Précipitations', wind: 'Vent', floor: 'Plancher' },
    floorNote: 'Le plancher impose un score minimal de 60 ou de 90 en cas de fortes pluies, de rafales, de brouillard ou d’orage.',
  },
  skills: {
    title: 'Compétences',
    intro: "Les outils que j'ai utilisés dans les projets et le stage ci-dessus.",
    groups: [
      { name: 'Langages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'C'] },
      {
        name: 'IA & Data',
        items: ['pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'MLflow', 'Apache Airflow', 'Streamlit'],
      },
      { name: 'Front-end', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
      {
        name: 'Back-end & API',
        items: ['Laravel', 'FastAPI', 'API REST', 'JWT', 'Swagger / OpenAPI', 'Postman'],
      },
      { name: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'Supabase'] },
      { name: 'Outils & DevOps', items: ['Git', 'GitHub', 'Docker', 'Linux'] },
      {
        name: 'Conception & méthodes',
        items: ['UML', 'MVC', 'Repository', 'Scrum', 'Jira', 'Trello', 'Figma'],
      },
    ],
  },
  contact: {
    title: ['Un stage à proposer\u00a0?', 'Écrivez-moi.'],
    body: "Le plus simple est de m'écrire par e-mail. Mon CV est à jour et tient sur une page.",
    emailLabel: 'Envoyer un e-mail',
    cv: 'Télécharger le CV (PDF)',
    footer: 'Conçu et développé par Mohamed Elkerymy avec React, TypeScript et Tailwind CSS.',
    source: 'Code source',
  },
}

const en: Content = {
  meta: { title: 'Mohamed Elkerymy — Full-Stack & AI Developer' },
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to content',
    language: 'Language',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
  },
  hero: {
    role: 'Full-Stack & AI Developer',
    location: 'Agadir, Morocco',
    intro: 'I build complete web applications and machine learning pipelines, from raw data to the interface.',
    availability: 'Looking for an job in full-stack or AI development',
    seeProjects: 'See the projects',
    downloadCv: 'Download CV',
    portraitAlt: 'Portrait of Mohamed Elkerymy',
  },
  about: {
    title: 'About',
    lead: 'I am a second-year student at YouCode (UM6P), specialising in AI development after a first year spent on full-stack web development.',
    body: 'I like taking a project all the way: cleaning the data, training and comparing models, then putting them behind an API and an interface that someone can actually use. In summer 2026 I spent two months as an intern at JNF Production on Wijha.ma, a tourism platform built with Next.js and Laravel.',
    facts: [
      { label: 'City', value: 'Agadir, Morocco' },
      { label: 'Education', value: 'YouCode – UM6P, 2nd year, Dev-AI track' },
      { label: 'Looking for', value: 'An job in full-stack or AI development' },
      { label: 'Languages', value: 'Tamazight, Arabic, French, English' },
    ],
  },
  experience: {
    title: 'Experience',
    role: 'Full-Stack Developer Intern',
    company: 'JNF Production, Safi',
    period: 'June – August 2026, 2 months on site',
    summary:
      'I worked on Wijha.ma, a platform for tourist experiences, events and activities, on both the front end and the back end.',
    items: [
      'Complete front end in Next.js (App Router), TypeScript and Tailwind CSS: landing page, search with advanced filters, detail pages, booking flow, traveller, host and admin areas, dark mode.',
      'Laravel REST API with a modular architecture (Auth, Core, Listing, Booking, Payment, Message): JWT authentication in HttpOnly cookies, Google sign-in (OAuth), OTP verification, role management.',
      'Host journey: 10-step listing creation with an interactive Leaflet map, photo upload, availability calendar and an automated waitlist.',
      'Real-time messaging (WebSockets with Pusher and Laravel Echo), favourites, QR-code tickets and a check-in scanner for hosts.',
      'PHPUnit feature tests on the Auth and Core modules, and team work with Git: feature branches, pull requests, conventional commits.',
    ],
    stackLabel: 'Stack',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Leaflet', 'Laravel', 'JWT', 'Pusher'],
    logCaption: 'A sample of my roughly 130 commits on the project repository, between 8 June and 4 July 2026.',
    educationTitle: 'Education',
    education: [
      {
        period: '2026 – present',
        title: 'YouCode – UM6P, Safi: 2nd year',
        detail: 'Dev-AI track: Python, machine learning and data engineering.',
      },
      {
        period: '2025 – 2026',
        title: 'YouCode – UM6P, Safi: 1st year',
        detail: 'Full-stack web development: HTML, CSS, JavaScript, PHP, Laravel, SQL, React.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    intro: 'A selection from more than 20 projects. The code of each one is public on GitHub.',
    filterLabel: 'Filter projects',
    filters: { all: 'All', ai: 'AI & Data', web: 'Full stack' },
    kinds: { ai: 'AI & Data', web: 'Full stack' },
    code: 'Code on GitHub',
    demo: 'Live demo',
    stackLabel: 'Stack',
    moreTitle: 'Other projects',
    featured: [
      {
        id: 'si-prd',
        name: 'SI-PRD',
        kind: 'ai',
        date: 'October 2026',
        tagline: 'Diabetes risk prediction',
        description:
          'A complete machine learning chain on clinical data, from the notebook to the tool the practitioner uses: the model is trained, tracked in MLflow, served by an API and read in an interface.',
        metrics: [
          { value: '94%', label: 'accuracy on the test set' },
          { value: '3', label: 'models compared' },
        ],
        stack: ['Python', 'scikit-learn', 'imbalanced-learn', 'MLflow', 'FastAPI', 'Streamlit', 'Docker'],
        repo: `${GH}/SI-PRD`,
      },
      {
        id: 'meteorisk',
        name: 'MeteoRisk',
        kind: 'ai',
        date: 'September 2026',
        tagline: 'Weather data pipeline',
        description:
          'A medallion pipeline (Bronze, Silver, Gold) run by a daily Airflow DAG. It pulls Open-Meteo forecasts for 120 Moroccan cities, cleans them, computes a weather risk score per city and per day to anticipate delivery delays, then loads everything into PostgreSQL for a Streamlit dashboard.',
        metrics: [
          { value: '120', label: 'Moroccan cities tracked' },
          { value: '7\u00a0days', label: 'of forecasts per city' },
        ],
        stack: ['Python', 'pandas', 'Apache Airflow', 'PostgreSQL', 'SQLAlchemy', 'Streamlit', 'Docker'],
        repo: `${GH}/MeteoRisk`,
      },
      {
        id: 'deliveryeta',
        name: 'DeliveryETA',
        kind: 'ai',
        date: 'September 2026',
        tagline: 'Delivery time prediction',
        description:
          'A regression model trained on 45,593 real orders: cleaning, feature engineering (haversine distance, rush hour, traffic), four models compared and XGBoost tuned with GridSearchCV. A Streamlit app then estimates a delivery in real time.',
        metrics: [
          { value: '0.82', label: 'R² on the test set' },
          { value: '3.1\u00a0min', label: 'mean absolute error' },
        ],
        stack: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Streamlit', 'uv'],
        repo: `${GH}/DeliveryETA`,
      },
      {
        id: 'eduhub',
        name: 'EduHub',
        kind: 'web',
        date: 'April 2026',
        tagline: 'School management platform',
        description:
          'My first-year capstone project: a web application with four roles (admin, teacher, student, parent) to manage classes and accounts, enter grades per activity, track absences with justifications approved by the administration, and email parents. Specifications, UML design and Figma mock-ups included.',
        metrics: [{ value: '4', label: 'roles, each with its own area' }],
        stack: ['Laravel', 'Blade', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'Docker'],
        repo: `${GH}/EduHub`,
      },
    ],
    more: [
      {
        id: 'ceninfo',
        name: 'CenInfo',
        kind: 'web',
        date: '2026',
        tagline: 'Film and series discovery',
        description:
          'Search through the OMDb API, TMDB trailers, user accounts and favourites stored with Supabase, infinite scrolling.',
        stack: ['React', 'Vite', 'Supabase', 'OMDb', 'TMDB'],
        repo: `${GH}/CenInfo`,
        demo: 'https://ceninfo.up.railway.app/',
      },
      {
        id: 'cinehall',
        name: 'CinéHall',
        kind: 'web',
        date: '2026',
        tagline: 'Cinema ticket booking',
        description:
          'Team project. Laravel API for rooms, screenings and bookings (VIP and couple seats, automatic expiry), PDF tickets with QR codes, and a React front end with Stripe payment.',
        stack: ['Laravel', 'JWT', 'Swagger', 'React', 'Stripe'],
        repo: `${GH}/CineHall`,
      },
      {
        id: 'marocexplore',
        name: 'MarocExplore',
        kind: 'web',
        date: '2026',
        tagline: 'Travel itinerary API',
        description:
          'REST API to create, search, filter and share multi-stop itineraries, with favourites, JWT authentication, Swagger documentation and PHPUnit tests.',
        stack: ['Laravel', 'MySQL', 'JWT', 'Swagger', 'PHPUnit'],
        repo: `${GH}/MarocExplore`,
      },
      {
        id: 'skycast',
        name: 'SkyCast',
        kind: 'web',
        date: '2026',
        tagline: 'Weather application',
        description:
          'Current weather, hourly and 7-day forecasts, temperature chart, geolocation, interface in French and English.',
        stack: ['React', 'Vite', 'Open-Meteo', 'Recharts'],
        repo: `${GH}/SkyCast`,
      },
    ],
    pipeline: {
      caption: 'The steps of the chain, in the order they run.',
      steps: [
        { name: 'KNN imputation', detail: 'impossible zeros become estimated values' },
        { name: 'K-Means', detail: 'patients grouped into risk profiles' },
        { name: 'SMOTE', detail: 'classes rebalanced, on the training set only' },
        { name: 'Random Forest', detail: 'tuned with GridSearchCV after comparing 3 models' },
        { name: 'MLflow', detail: 'experiment tracking and model registry' },
        { name: 'FastAPI', detail: 'the model is served by a /predict endpoint' },
        { name: 'Streamlit', detail: 'practitioner form and risk display' },
      ],
    },
    figures: {
      deliveryeta: 'Screenshot of the Streamlit app: model predictions against actual times.',
      deliveryetaAlt:
        'The “Model Precision” page of the app: MAE 3.10 min, RMSE 3.89 min, R² 0.8242 and a scatter plot of predictions against actual values.',
      eduhub: 'Screenshot of the application: the student home screen.',
      eduhubAlt: 'Home screen of the EduHub student area with its side menu.',
    },
  },
  risk: {
    title: 'Try the risk score',
    caption:
      'The same calculation as in the pipeline: 30% temperature, 40% precipitation, 30% wind, with a floor when conditions become dangerous.',
    tempMax: 'Maximum temperature',
    precipitation: 'Precipitation',
    windSpeed: 'Wind',
    windGusts: 'Gusts',
    condition: 'Conditions',
    conditions: { normal: 'Normal', fog: 'Fog', storm: 'Thunderstorm' },
    presetsLabel: 'Examples',
    presets: { calm: 'Calm day', heatwave: 'Heatwave', storm: 'Thunderstorm' },
    result: 'Risk score',
    outOf: 'out of 100',
    levels: {
      low: 'Low',
      moderate: 'Moderate',
      high: 'High',
      very_high: 'Very high',
      extreme: 'Extreme',
    },
    components: { temp: 'Temperature', precip: 'Precipitation', wind: 'Wind', floor: 'Floor' },
    floorNote: 'The floor forces a minimum score of 60 or 90 in heavy rain, strong gusts, fog or thunderstorms.',
  },
  skills: {
    title: 'Skills',
    intro: 'The tools I used in the projects and the internship above.',
    groups: [
      { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'C'] },
      {
        name: 'AI & Data',
        items: ['pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'MLflow', 'Apache Airflow', 'Streamlit'],
      },
      { name: 'Front end', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
      {
        name: 'Back end & APIs',
        items: ['Laravel', 'FastAPI', 'REST APIs', 'JWT', 'Swagger / OpenAPI', 'Postman'],
      },
      { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'Supabase'] },
      { name: 'Tools & DevOps', items: ['Git', 'GitHub', 'Docker', 'Linux'] },
      {
        name: 'Design & methods',
        items: ['UML', 'MVC', 'Repository', 'Scrum', 'Jira', 'Trello', 'Figma'],
      },
    ],
  },
  contact: {
    title: ['Have an job to offer?', 'Write to me.'],
    body: 'Email is the easiest way to reach me. My CV is up to date and fits on one page.',
    emailLabel: 'Send an email',
    cv: 'Download the CV (PDF)',
    footer: 'Designed and built by Mohamed Elkerymy with React, TypeScript and Tailwind CSS.',
    source: 'Source code',
  },
}

export const content: Record<Lang, Content> = { fr, en }
