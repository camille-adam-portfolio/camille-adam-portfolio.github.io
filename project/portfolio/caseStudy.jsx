/* Case study — De la refonte des filtres aux vues partagées */

function CaseStudyCargo({ lang, go }) {
  const isFR = lang === 'fr';

  const renderRich = (txt) => {
    const parts = txt.split(/(\*\*[^*]+\*\*|__[^_]+__)/g);
    return parts.map((p, i) => {
      if (p.startsWith('**') && p.endsWith('**')) return <strong key={i}>{p.slice(2,-2)}</strong>;
      if (p.startsWith('__') && p.endsWith('__')) return <em key={i}>{p.slice(2,-2)}</em>;
      return <React.Fragment key={i}>{p}</React.Fragment>;
    });
  };

  const t = isFR ? {
    back: '← Retour',
    title: 'De la refonte des filtres aux vues partagées',
    intro: "Oplit est un logiciel B2B de gestion industrielle. Les ordonnanceurs et responsables de production l'utilisent quotidiennement pour piloter les ordres de fabrication, suivre les retards, analyser la capacité. Pour faire ça, ils filtrent. Or les filtres d'Oplit étaient trop rigides : un seul comportement possible et aucune adaptation au type de donnée manipulée. Les utilisateurs étaient bloqués.",
    infos: [
      { label: 'Date', value: 'Mai – Juillet 2025' },
      { label: 'Rôle', value: 'End-to-end product designer en binôme avec le PM' },
      { label: 'Équipe', value: 'Product manager, Dev Full Stack' },
      { label: 'Méthodologie', value: 'Discovery → Research → Ideation → Design → Tests → Specs → Delivery → Analytics' },
    ],
    problem: {
      kicker: 'PROBLÈME',
      title: 'Un système de filtrage peu flexible',
      lead: 'Quatre besoins ont remontés clairement :',
      needs: [
        { title: 'Voir quels filtres sont actifs', desc: 'pour ne plus confondre "pas de données" et "données masquées"' },
        { title: 'Exclure des valeurs', desc: '2 clients ne veulent pas voir certaines opérations taggées, pas juste les inclure' },
        { title: 'Des filtres adaptés au type de donnée', desc: "on ne filtre pas une date comme un texte comme un nombre" },
        { title: 'Sauvegarder une configuration', desc: '3 clients principaux demandent à ne plus tout reconfigurer à chaque session' },
      ],
    },
    research: {
      kicker: 'RECHERCHE',
      title: "L'insight qui a tout changé",
      body: "En creusant le besoin de sauvegarde, on a compris que ce n'était pas juste \"mémoriser les filtres\". Ce que les utilisateurs voulaient, c'était **retrouver leur contexte de travail complet** : les filtres, le tri, l'affichage, les secteurs sélectionnés.",
      quote: {
        text: "Il serait intéressant d'enregistrer une vue pour notre gestionnaire matière non précieuse (Laurent), car il ne travaille qu'en regardant les OFs concernés par une demande de matière.",
        author: 'Laurent',
        role: 'Ordonnanceur · Client en joaillerie',
      },
      after: "Laurent n'a pas besoin d'un filtre. Il a besoin de sa vue. Ce glissement de la feature UI au cas d'usage métier a donné naissance au système de vues sauvegardées.",
    },
    ideation: {
      kicker: 'IDÉATION',
      title: "S'inspirer d'autres contextes pour résoudre un problème métier",
      lead: "À partir des besoins identifiés, on a cherché des références qui résolvaient des problèmes similaires dans d'autres contextes.",
      benchmark: [
        {
          tool: 'Notion',
          color: '#1a1a1a',
          observed: "Filtres visuels organisés par type de champ (texte, date, nombre) avec des opérateurs adaptés à chaque type.",
          retained: "La logique de typage des données dans les filtres — chaque champ propose ses propres opérateurs selon sa nature.",
          tag: 'Filtres flexibles',
        },
        {
          tool: 'Airtable',
          color: '#fc1a64',
          observed: "Vues multiples sur une même base de données, nommées et sauvegardées par l'utilisateur.",
          retained: "Le concept de vue nommée et persistante — l'utilisateur construit et retrouve son propre contexte de travail.",
          tag: 'Vues sauvegardées',
        },
        {
          tool: 'Linear',
          color: '#5e6ad2',
          observed: "Labels clairs, hiérarchie visuelle épurée adaptée à un usage quotidien intensif.",
          retained: "La sobriété visuelle dans un contexte métier dense — pas de surcharge cognitive.",
          tag: 'UI industrielle',
        },
      ],
      conclusion: "Ce benchmark a confirmé deux directions claires : des filtres flexibles par type de donnée, et des vues sauvegardées nommées adaptées à la densité d'un outil industriel.",
      sketches: [
        { src: 'assets/cs-ideation-notion.png?v=2', caption: 'Mapper les champs · Base de données Notion' },
        { src: 'assets/cs-ideation-sidebar.png?v=2', caption: 'Benchmark des composants de filtres par type · Date & Label' },
      ],
    },
    solution: {
      kicker: 'SOLUTION',
      title: 'Des filtres sauvegardés dans des vues',
      filtersText: "**Côté filtres :** les champs sont maintenant typés (texte, nombre, date, tag), avec des composants et des opérateurs adaptés à chaque type. Un datepicker pour les dates, un input numérique pour les quantités, un multi-select pour les tags. Les filtres actifs sont toujours visibles. Un empty state clair indique quand c'est le filtrage et non les données qui est en cause.",
      filtersImage: 'assets/cs-solution-kanban.png?v=2',
      filtersAlt: 'Mockup — Filtres typés sur la vue kanban',
      viewsText: "**Côté vues :** les utilisateurs peuvent créer, nommer et sauvegarder des vues personnalisées qui capturent l'état complet de l'écran. Une vue \"En-cours\" est disponible par défaut. Un système de droits et permissions permet aux admins de gérer les vues de leur équipe.",
      viewsImage: 'assets/cs-solution-vues.png?v=2',
      viewsAlt: 'Mockup — Sidebar des vues sauvegardées sur un poste de production',
      demoCta: 'Voir la démo vidéo',
    },
    results: {
      kicker: 'RÉSULTATS',
      title: 'Un nouvel usage adopté',
      body: "Au bout de 3 mois, la refonte des filtres a permis d'augmenter l'usage sur la vue kanban et les vues ont été fortement adoptées.",
      metrics: [
        { value: '2', unit: '×', label: "plus d'utilisation sur les filtres" },
        { value: '20', unit: '', label: 'clients ont créé au moins 10 vues' },
        { value: '0', unit: '', label: 'messages de support sur la compréhension du parcours des vues' },
      ],
    },
  } : {
    back: '← Back',
    title: 'From a filters overhaul to shared views',
    intro: "Oplit is a B2B industrial management software. Schedulers and production managers use it daily to pilot manufacturing orders, track delays, and analyse capacity. To do that, they filter. But Oplit's filters were too rigid: a single behaviour, no adaptation to the data type. Users were stuck.",
    infos: [
      { label: 'Date', value: 'May – July 2025' },
      { label: 'Role', value: 'End-to-end product designer paired with the PM' },
      { label: 'Team', value: 'Product manager, Full-stack engineer' },
      { label: 'Method', value: 'Discovery → Research → Ideation → Design → Tests → Specs → Delivery → Analytics' },
    ],
    problem: {
      kicker: 'PROBLEM',
      title: 'A filter system that lacked flexibility',
      lead: 'Four needs surfaced clearly:',
      needs: [
        { title: 'See which filters are active', desc: 'so users stop confusing "no data" with "hidden data"' },
        { title: 'Exclude values', desc: "2 clients don't want to see certain tagged operations, not just include them" },
        { title: 'Filters adapted to the data type', desc: "you don't filter a date like a text or a number" },
        { title: 'Save a configuration', desc: '3 key clients asked not to reconfigure everything every session' },
      ],
    },
    research: {
      kicker: 'RESEARCH',
      title: 'The insight that changed everything',
      body: 'Digging into the saving need, we realised it wasn\'t just "remembering filters". What users wanted was to **find their full work context again**: filters, sorting, display, selected sectors.',
      quote: {
        text: "It would be useful to save a view for our non-precious materials manager (Laurent), because he only works by looking at the orders concerned by a material request.",
        author: 'Laurent',
        role: 'Scheduler · Jewellery client',
      },
      after: "Laurent doesn't need a filter. He needs his view. That shift from a UI feature to a business use case gave birth to the saved-views system.",
    },
    ideation: {
      kicker: 'IDEATION',
      title: 'Borrowing from other contexts to solve a domain problem',
      lead: 'From the identified needs, we looked for references that solved similar problems in other contexts.',
      benchmark: [
        {
          tool: 'Notion',
          color: '#1a1a1a',
          observed: 'Visual filters organised by field type (text, date, number) with operators adapted to each type.',
          retained: 'The data-typing logic in filters — each field offers its own operators according to its nature.',
          tag: 'Flexible filters',
        },
        {
          tool: 'Airtable',
          color: '#fc1a64',
          observed: 'Multiple views on the same database, named and saved by the user.',
          retained: 'The concept of a named, persistent view — the user builds and retrieves their own work context.',
          tag: 'Saved views',
        },
        {
          tool: 'Linear',
          color: '#5e6ad2',
          observed: 'Clean labels, refined visual hierarchy adapted to intensive daily use.',
          retained: 'Visual restraint in a dense business context — no cognitive overload.',
          tag: 'Industrial UI',
        },
      ],
      conclusion: 'This benchmark confirmed two clear directions: flexible filters by data type, and named saved views adapted to the density of an industrial tool.',
      sketches: [
        { src: 'assets/cs-ideation-notion.png?v=2', caption: 'Mapping the fields · Notion database' },
        { src: 'assets/cs-ideation-sidebar.png?v=2', caption: 'Benchmark of filter components by type · Date & Label' },
      ],
    },
    solution: {
      kicker: 'SOLUTION',
      title: 'Filters saved in views',
      filtersText: '**Filters side:** fields are now typed (text, number, date, tag), with components and operators adapted to each type. A datepicker for dates, a numeric input for quantities, a multi-select for tags. Active filters are always visible. A clear empty state indicates when it\'s the filtering and not the data that\'s at fault.',
      filtersImage: 'assets/cs-solution-kanban.png?v=2',
      filtersAlt: 'Mockup — Typed filters on the kanban view',
      viewsText: '**Views side:** users can create, name and save personal views capturing the full state of the screen. A default "In-progress" view is available. A rights and permissions system lets admins manage their team\'s views.',
      viewsImage: 'assets/cs-solution-vues.png?v=2',
      viewsAlt: 'Mockup — Saved views sidebar on a production workstation',
      demoCta: 'Watch the demo video',
    },
    results: {
      kicker: 'RESULTS',
      title: 'A new usage, adopted',
      body: 'After 3 months, the filter overhaul increased usage on the kanban view and saved views were strongly adopted.',
      metrics: [
        { value: '2', unit: '×', label: 'more filter usage' },
        { value: '20', unit: '', label: 'clients created at least 10 views' },
        { value: '0', unit: '', label: 'support messages about the views journey' },
      ],
    },
  };

  return (
    <div className="case-wrap">
      <a className="case-back" onClick={() => go('home')}>{t.back}</a>

      <h1 className="case-title">{t.title}</h1>
      <p className="case-intro">{t.intro}</p>

      <div className="case-hero-img">
        <img src="assets/cs-hero-industrial.png" alt="Atelier industriel · ordonnancement" />
      </div>

      <div className="case-infos">
        {t.infos.map((info, i) => (
          <div className="case-info" key={i}>
            <div className="label">{info.label}</div>
            <div className="value">{info.value}</div>
          </div>
        ))}
      </div>

      {/* PROBLÈME */}
      <section className="case-section">
        <div className="case-chapter">{t.problem.kicker}</div>
        <h2 className="case-h2">{t.problem.title}</h2>
        <p>{t.problem.lead}</p>
        <ul className="case-needs">
          {t.problem.needs.map((n, i) => (
            <li key={i}>
              <div className="need-title">{n.title}</div>
              <div className="need-desc">{n.desc}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* RECHERCHE */}
      <section className="case-section">
        <div className="case-chapter">{t.research.kicker}</div>
        <h2 className="case-h2">{t.research.title}</h2>
        <p>{renderRich(t.research.body)}</p>

        <div className="case-quote">
          <p>« {t.research.quote.text} »</p>
          <div className="case-quote-author">
            <img src="assets/cs-laurent.png" alt={t.research.quote.author} />
            <div>
              <div className="case-quote-name">{t.research.quote.author}</div>
              <div className="case-quote-role">{t.research.quote.role}</div>
            </div>
          </div>
        </div>

        <p>{renderRich(t.research.after)}</p>
      </section>

      {/* IDÉATION */}
      <section className="case-section">
        <div className="case-chapter">{t.ideation.kicker}</div>
        <h2 className="case-h2">{t.ideation.title}</h2>
        <p>{t.ideation.lead}</p>

        <div className="case-bench">
          <div className="case-bench-head">
            <div>{isFR ? 'OUTIL' : 'TOOL'}</div>
            <div>{isFR ? "CE QU'ON A OBSERVÉ" : 'WHAT WE OBSERVED'}</div>
            <div>{isFR ? "CE QU'ON EN A RETENU" : 'WHAT WE TOOK FROM IT'}</div>
          </div>
          {t.ideation.benchmark.map((b, i) => (
            <div className="case-bench-row" key={i}>
              <div className="bench-tool">
                <span className="bench-dot" style={{background: b.color}} />
                <span>{b.tool}</span>
              </div>
              <div className="bench-cell">{b.observed}</div>
              <div className="bench-cell">
                {b.retained}
                <span className="bench-tag">→ {b.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="case-quiet">{t.ideation.conclusion}</p>

        <div className="case-sketches">
          {t.ideation.sketches.map((s, i) => (
            <figure key={i}>
              <div className="case-sketch-frame">
                <img src={s.src} alt={s.caption} />
              </div>
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="case-section">
        <div className="case-chapter">{t.solution.kicker}</div>
        <h2 className="case-h2">{t.solution.title}</h2>

        <p>{renderRich(t.solution.filtersText)}</p>

        <div className="case-mockup">
          <img src={t.solution.filtersImage} alt={t.solution.filtersAlt} />
        </div>

        <div className="case-cta-wrap">
          <a className="case-cta" href="https://www.youtube.com/watch?v=9xa4Lyvio8c" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('https://www.youtube.com/watch?v=9xa4Lyvio8c', '_blank', 'noopener,noreferrer'); }}>{t.solution.demoCta}</a>
        </div>

        <p>{renderRich(t.solution.viewsText)}</p>

        <div className="case-mockup">
          <img src={t.solution.viewsImage} alt={t.solution.viewsAlt} />
        </div>

        <div className="case-cta-wrap">
          <a className="case-cta" href="https://www.youtube.com/watch?v=vx39rwJbmsA" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('https://www.youtube.com/watch?v=vx39rwJbmsA', '_blank', 'noopener,noreferrer'); }}>{t.solution.demoCta}</a>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="case-section">
        <div className="case-chapter">{t.results.kicker}</div>
        <h2 className="case-h2">{t.results.title}</h2>
        <p>{t.results.body}</p>

        <div className="case-metrics">
          {t.results.metrics.map((m, i) => (
            <div className="case-metric" key={i}>
              <div className="case-metric-value">{m.value}<span className="unit">{m.unit}</span></div>
              <div className="case-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="case-footer">
        <span>Camille Adam © 2025</span>
        <a onClick={() => go('home')}>{isFR ? '← Retour aux projets' : '← Back to projects'}</a>
      </div>
    </div>
  );
}

Object.assign(window, { CaseStudyCargo });
