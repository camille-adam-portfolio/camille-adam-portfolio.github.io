/* Cargo-style layout */

function CargoLayout({ lang, setLang, go }) {
  const isFR = lang === 'fr';

  const bioText = isFR
    ? `Camille Adam, product designer basée à Paris.\nUX research et conception d'interfaces B2B.`
    : `Camille Adam, product designer based in Paris.\nUX research and B2B interface design.`;

  const projects = [
    {
      titleLines: ['SHARED', 'VIEWS'],
      subtitle: isFR
        ? 'De la refonte des filtres aux vues partagées'
        : 'From a filters overhaul to shared views',
      desc: isFR
        ? 'Refonte du système de filtres et introduction des vues sauvegardées pour permettre aux opérateurs industriels de retrouver instantanément leur contexte de travail.'
        : 'Overhaul of the filter system and introduction of saved views, so industrial operators can instantly recover their working context.',
      meta: isFR ? 'Éditeur SaaS · 2025 — 2026' : 'SaaS publisher · 2025 — 2026',
      visual: 'sketch',
      image: 'assets/shared-views.png',
      live: true,
      cta: isFR ? "Lire l'étude de cas" : 'Read case study',
    },
  ];

  return (
    <div className="cargo-layout">
      {/* LEFT */}
      <aside className="cargo-col cargo-left">
        <div className="cargo-block">
          <h1 className="cargo-head" style={{ fontWeight: '600' }}>CAMILLE ADAM</h1>
        </div>
        <div className="cargo-block">
          <div className="cargo-bio">{bioText}</div>
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
          {projects.map((p, i) => (
            <article className="cargo-project" key={i}>
              <div
                className={`cargo-project-visual cargo-visual-${p.visual}${p.image ? ' has-image' : ''}`}
                onClick={() => p.live && go('case-filters')}
                style={{ cursor: p.live ? 'pointer' : 'default' }}
              >
                {p.image ? (
                  <img className="cargo-project-img" src={p.image} alt={p.titleLines.join(' ')} />
                ) : (
                  <div className="cargo-big-type">
                    {p.titleLines.map((line, j) => (
                      <div className="line" key={j}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
              <div className="cargo-project-meta">
                <div className="cargo-project-index">{p.subtitle}</div>
                <div className="cargo-project-desc">
                  {p.meta}<br /><br />
                  {p.desc}
                  {p.live ? (
                    <><br /><span className="cargo-project-cta cargo-link" onClick={() => go('case-filters')}>{p.cta}</span></>
                  ) : (
                    <><br /><span style={{ color: 'var(--ink-mute)' }}>→ {p.cta}</span></>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* RIGHT */}
      <aside className="cargo-col cargo-right">
        <div className="cargo-block">
          <div className="cargo-block-title">{isFR ? 'Compétences' : 'Skills'}</div>
          <div className="cargo-chips">
            {(isFR
              ? ['Recherche utilisateur', 'Discovery produit', "Design d'interface", 'Design system', 'Maquettage & prototypage', 'Graphisme & édition', 'Figma', 'Notion', 'Mixpanel']
              : ['User research', 'Product discovery', 'Interface design', 'Design system', 'Wireframing & prototyping', 'Graphic design & editorial', 'Figma', 'Notion', 'Mixpanel']
            ).map((c) => (
              <span className="cargo-chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div className="cargo-block">
          <div className="cargo-block-title">{isFR ? 'Expérience' : 'Experience'}</div>
          <ul className="cargo-xp">
            <li className="cargo-xp-item">
              <div className="cargo-xp-role">UX/UI designer</div>
              <div className="cargo-xp-meta">
                <span className="cargo-xp-place">Oplit · Paris</span>
                <span className="cargo-xp-date">{isFR ? 'Sept 2024 — Aujourd’hui' : 'Sept 2024 — Present'}</span>
              </div>
            </li>
            <li className="cargo-xp-item">
              <div className="cargo-xp-role">{isFR ? 'UX/UI designer & chercheuse' : 'UX/UI designer & researcher'}</div>
              <div className="cargo-xp-meta">
                <span className="cargo-xp-place">Praticable · LIRIS — Paris/Lyon</span>
                <span className="cargo-xp-date">{isFR ? 'Juin 2022 — Août 2023' : 'June 2022 — Aug 2023'}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="cargo-block">
          <div className="cargo-block-title">{isFR ? 'Contact' : 'Contact'}</div>
          <div className="cargo-contacts">
            <a className="cargo-link" href="mailto:c.adam.design@gmail.com">c.adam.design@gmail.com</a>
            <a className="cargo-link" href="tel:+33787069911">07 87 06 99 11</a>
            <a className="cargo-link" href="#">LinkedIn</a>
            <a className="cargo-link" href="#">CV.pdf</a>
          </div>
        </div>
      </aside>
    </div>
  );
}

Object.assign(window, { CargoLayout });
