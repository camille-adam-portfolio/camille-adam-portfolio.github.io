/* Cargo-style layout */

function CargoLayout({ lang, setLang, t, go }) {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  const isFR = lang === 'fr';

  const bioText = isFR ?
  `Camille Adam, product designer basée à Paris (FR). Spécialisée en recherche utilisateur et en design d'interface pour des outils métiers complexes.` :
  `Camille Adam, product designer based in Paris (FR). Focus on user research and interface design for complex business tools.`;

  // Projects descriptions
  const projects = [
  {
    idx: isFR ? '01. Étude de cas' : '01. Case study',
    titleLines: ['SHARED', 'VIEWS'],
    subtitle: isFR ?
    'De la refonte des filtres aux vues partagées' :
    'From a filters overhaul to shared views',
    desc: isFR ?
    'Refonte du système de filtres et introduction des vues sauvegardées pour permettre aux opérateurs industriels de retrouver instantanément leur contexte de travail.' :
    'Overhaul of the filter system and introduction of saved views, so industrial operators can instantly recover their working context.',
    meta: isFR ? 'Éditeur SaaS · 2025 — 2026' : 'SaaS publisher · 2025 — 2026',
    visual: 'sketch',
    image: 'assets/shared-views.png?v=2',
    live: true,
    cta: isFR ? 'Lire l\'étude de cas' : 'Read case study'
  },
  {
    idx: isFR ? '02. Étude de cas' : '02. Case study',
    titleLines: ['OPS', 'ONBOARDING'],
    subtitle: isFR ?
    'Onboarding d\'une plateforme d\'automatisation' :
    'Onboarding of an automation platform',
    desc: isFR ?
    'Conception du parcours d\'activation d\'une plateforme d\'automatisation de workflows. Objectif : amener un nouvel utilisateur de l\'inscription à son premier workflow productif en moins de quinze minutes.' :
    'Designed the activation journey of a workflow automation platform. Goal: bring a new user from sign-up to their first productive workflow in under fifteen minutes.',
    meta: isFR ? 'Startup remote · 2025' : 'Remote startup · 2025',
    visual: 'grid',
    live: false,
    cta: isFR ? 'Étude à venir' : 'Case study pending'
  },
  {
    idx: isFR ? '03. Étude de cas' : '03. Case study',
    titleLines: ['DATA', 'VIZ'],
    subtitle: isFR ?
    'Tableaux de bord analytiques — fintech B2B' :
    'Analytics dashboards — B2B fintech',
    desc: isFR ?
    'Système de dashboards modulaires pour une plateforme de paiement B2B. Travail sur la hiérarchie visuelle de dizaines de métriques, sur les micro-interactions et sur la cohérence inter-modules.' :
    'Modular dashboard system for a B2B payments platform. Worked on visual hierarchy across dozens of metrics, micro-interactions, and cross-module consistency.',
    meta: isFR ? 'Fintech B2B · 2024' : 'B2B fintech · 2024',
    visual: 'sketch',
    live: false,
    cta: isFR ? 'Étude à venir' : 'Case study pending'
  }];


  // Right column: CV
  const cv = isFR ? {
    profile: 'PROFIL',
    education: 'Formation',
    employment: 'Expérience',
    skills: 'Compétences',
    tools: 'Outils',
    languages: 'Langues',
    educationItems: [
    { title: 'M.A. Design d\'Interaction', place: 'Gobelins · Paris', date: '2021 — 2023' },
    { title: 'Licence Design Graphique', place: 'ÉSAD · Reims', date: '2018 — 2021' },
    { title: 'Certifications UX', place: 'NN/g · Dovetail', date: '(3 ans)' }],

    employmentItems: [
    { title: 'Product Designer', place: 'Éditeur SaaS industriel, Paris', date: '2023 — 2026 (alternance)' },
    { title: 'UX Designer', place: 'Agence produit, Lyon', date: 'Été 2023 (stage, 4 mois)' },
    { title: 'Designer junior', place: 'Startup edtech, remote', date: '2022 — 2023 (6 mois)' },
    { title: 'Assistante design', place: 'Studio indépendant, Paris', date: '2021 (freelance)' }],

    skillsItems: [
    'Recherche utilisateur (terrain, tests, interviews)',
    'Architecture de l\'information',
    'Design d\'interface & design systems',
    'Prototypage (lo-fi à hi-fi)',
    'Data-viz appliquée',
    'Facilitation d\'atelier'],

    toolsItems: [
    'Figma, FigJam — expert',
    'Notion, Linear, Miro',
    'Dovetail, Maze, Hotjar',
    'Protopie',
    'HTML / CSS (lecture, prototype)',
    'Adobe Suite'],

    languagesItems: [
    'Français — langue maternelle',
    'Anglais — C1 professionnel',
    'Japonais — débutant']

  } : {
    profile: 'PROFILE',
    education: 'Education',
    employment: 'Employment',
    skills: 'Skills',
    tools: 'Tools',
    languages: 'Languages',
    educationItems: [
    { title: 'M.A. Interaction Design', place: 'Gobelins · Paris', date: '2021 — 2023' },
    { title: 'B.A. Graphic Design', place: 'ÉSAD · Reims', date: '2018 — 2021' },
    { title: 'UX Certifications', place: 'NN/g · Dovetail', date: '(3 yrs)' }],

    employmentItems: [
    { title: 'Product Designer', place: 'Industrial SaaS publisher, Paris', date: '2023 — 2026 (work-study)' },
    { title: 'UX Designer', place: 'Product agency, Lyon', date: 'Summer 2023 (intern, 4 months)' },
    { title: 'Junior designer', place: 'Edtech startup, remote', date: '2022 — 2023 (6 months)' },
    { title: 'Design assistant', place: 'Independent studio, Paris', date: '2021 (freelance)' }],

    skillsItems: [
    'User research (field, testing, interviews)',
    'Information architecture',
    'UI design & design systems',
    'Prototyping (lo-fi to hi-fi)',
    'Applied data-viz',
    'Workshop facilitation'],

    toolsItems: [
    'Figma, FigJam — expert',
    'Notion, Linear, Miro',
    'Dovetail, Maze, Hotjar',
    'Protopie',
    'HTML / CSS (read, prototype)',
    'Adobe Suite'],

    languagesItems: [
    'French — native',
    'English — C1 professional',
    'Japanese — beginner']

  };

  return (
    <div className="cargo-layout">
      {/* LEFT */}
      <aside className="cargo-col cargo-left">
        <div className="cargo-block">
          <h1 className="cargo-head">Camille_Adam — Portfolio</h1>
        </div>
        <div className="cargo-block">
          <div className="cargo-bio" style={{ fontSize: "1px" }}>{bioText}</div>
        </div>
        <div className="cargo-block cargo-lang-block">
          <div className="cargo-block-title">{isFR ? 'Langue' : 'Language'}</div>
          <div className="cargo-lang">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
            <span style={{ color: 'var(--ink-mute)' }}>/</span>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </aside>

      {/* CENTER */}
      <main className="cargo-col cargo-center">
        <h2 className="cargo-head">{isFR ? 'Travaux (sélection)' : 'Work (selection)'}</h2>
        <div className="cargo-projects">
          {projects.map((p, i) =>
          <article className="cargo-project" key={i}>
              <div
              className={`cargo-project-visual cargo-visual-${p.visual}${p.image ? ' has-image' : ''}`}
              onClick={() => p.live && go('case-filters')}
              style={{ cursor: p.live ? 'pointer' : 'default' }}>
              
                {p.image ?
              <img className="cargo-project-img" src={p.image} alt={p.titleLines.join(' ')} /> :

              <div className="cargo-big-type">
                    {p.titleLines.map((line, j) =>
                <div className="line" key={j}>{line}</div>
                )}
                  </div>
              }
              </div>
              <div className="cargo-project-meta">
                <div className="cargo-project-index">{p.subtitle}</div>
                <div className="cargo-project-desc">
                  {p.meta}<br /><br />
                  {p.desc}
                  {p.live ?
                <><br /><span className="cargo-project-cta cargo-link" onClick={() => go('case-filters')}>{p.cta}</span></> :

                <><br /><span style={{ color: 'var(--ink-mute)' }}>→ {p.cta}</span></>
                }
                </div>
              </div>
            </article>
          )}
        </div>
      </main>

      {/* RIGHT */}
      <aside className="cargo-col cargo-right">
        <div className="cargo-block">
          <div className="cargo-block-title">{isFR ? 'Compétences' : 'Skills'}</div>
          <div className="cargo-chips">
            {(isFR ?
            ['Recherche utilisateur', 'Design d\'interface', 'Design system', 'Prototypage', 'Architecture de l\'information', 'Tests utilisateurs', 'Outils métiers complexes'] :
            ['User research', 'Interface design', 'Design system', 'Prototyping', 'Information architecture', 'User testing', 'Complex business tools']).
            map((c) =>
            <span className="cargo-chip" key={c}>{c}</span>
            )}
          </div>
        </div>
        <div className="cargo-block">
          <div className="cargo-block-title">{isFR ? 'Expérience' : 'Experience'}</div>
          <ul className="cargo-xp">
            <li className="cargo-xp-item">
              <div className="cargo-xp-role">UX/UI/product designer</div>
              <div className="cargo-xp-meta">
                <span className="cargo-xp-place">Oplit</span>
                <span className="cargo-xp-date">{isFR ? 'Sept 2024 — Aujourd\u2019hui' : 'Sept 2024 — Present'}</span>
              </div>
            </li>
            <li className="cargo-xp-item">
              <div className="cargo-xp-role">{isFR ? 'UI designer et chercheuse' : 'UI designer & researcher'}</div>
              <div className="cargo-xp-meta">
                <span className="cargo-xp-place">Praticable</span>
                <span className="cargo-xp-date">Sept 2022 — Oct 2023</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="cargo-block">
          <div className="cargo-block-title">{isFR ? 'Contact' : 'Contact'}</div>
          <div className="cargo-contacts">
            <a className="cargo-link" href="mailto:camille.adam@exemple.fr">camille.adam@exemple.fr</a>
            <a className="cargo-link" href="#">LinkedIn</a>
            <a className="cargo-link" href="#">{isFR ? 'CV.pdf — 280 Ko' : 'CV.pdf — 280 Kb'}</a>
          </div>
        </div>
      </aside>
    </div>);

}

Object.assign(window, { CargoLayout });