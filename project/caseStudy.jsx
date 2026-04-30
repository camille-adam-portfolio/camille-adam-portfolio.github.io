/* Minimal cargo-style case study */

function CaseStudyCargo({ lang, go }) {
  const isFR = lang === 'fr';
  const t = isFR ? {
    back: '← Retour',
    meta: ['Étude de cas', '2025 — 2026', '8 min'],
    title: 'De la refonte des filtres aux vues partagées',
    intro: 'Comment on a transformé un système de filtres hérité — lent, peu découvrable, source de frustrations quotidiennes — en un mécanisme de vues partagées qui est devenu l\'un des piliers de la collaboration dans le produit.',
    infos: [
    { label: 'Rôle', value: 'Product Designer lead' },
    { label: 'Équipe', value: '1 PM · 1 designer · 4 ingénieurs' },
    { label: 'Durée', value: '5 mois · 09·2025 → 01·2026' },
    { label: 'Plateforme', value: 'Web desktop, grands comptes' },
    { label: 'Livraison', value: 'Déployé 100 % des comptes' }],

    sections: [
    {
      chapter: 'Contexte · 01',
      title: 'Un système de filtres fatigué',
      body: [
      'Notre produit permet à des équipes de planification industrielle de superviser des milliers d\'ordres de fabrication en temps réel. Le tableau principal — celui sur lequel nos utilisateurs passent 6 à 8 heures par jour — disposait d\'un système de filtres hérité depuis la v1.',
      'Trois plaintes revenaient systématiquement : les filtres étaient **lents à configurer**, **difficiles à retrouver**, et **impossibles à partager** entre collègues. Chaque utilisateur recréait ses propres combinaisons, matin après matin.']

    },
    {
      chapter: 'Enjeu · 02',
      title: 'L\'enjeu n\'était pas visuel',
      body: [
      'Une exploration visuelle initiale a montré que le problème n\'était pas l\'apparence des filtres, mais leur **modèle mental**. Les utilisateurs ne pensaient pas en « filtres » — ils pensaient en **contextes de travail** : mes OF en retard, la ligne 2 cette semaine, l\'équipe de nuit.'],

      quote: {
        text: 'On perd un quart d\'heure chaque matin juste à retrouver ce qu\'on regardait la veille. Et si mon collègue veut voir la même chose, il faut lui expliquer clic par clic.',
        cite: 'Planificatrice · 12 ans d\'ancienneté · Site de Metz'
      }
    },
    {
      chapter: 'Solution · 03',
      title: 'Des contextes, pas des filtres',
      body: [
      'On a pivoté vers un modèle de **vues nommées, partageables et persistantes**. Une vue encapsule une combinaison de filtres, un tri, un jeu de colonnes et un niveau de zoom. Elle peut être privée, partagée avec une équipe, ou promue au niveau du compte.'],

      table: {
        headers: ['Dimension', 'Avant', 'Après'],
        rows: [
        ['Découverte', 'Menu à 3 niveaux, enfoui dans l\'en-tête', 'Sidebar dédiée, groupée par équipe'],
        ['Configuration', 'Modal avec 14 champs', 'Composition inline, filtre par filtre'],
        ['Partage', 'Aucun — chacun reconstruisait', 'Lien direct, permissions, màj temps réel'],
        ['Persistance', 'Perdu au refresh', 'Sauvegardé serveur, versionné']]

      },
      imageLabel: 'Diagramme — avant / après'
    },
    {
      chapter: 'Mise en œuvre · 04',
      title: 'Détails qui ont fait la différence',
      body: [
      'Trois décisions ont eu un impact disproportionné sur l\'adoption. D\'abord, la **barre de filtres composable** : chaque filtre est un chip qu\'on peut ajouter, réordonner, désactiver temporairement — sans jamais quitter la vue.',
      'Ensuite, la **séparation brouillon / vue sauvegardée** : modifier une vue partagée ne l\'écrase plus. Le travail est toujours un brouillon, qu\'on publie explicitement.',
      'Enfin, les **vues d\'équipe** : chaque équipe dispose d\'un espace où les leads peuvent épingler 3 à 5 vues canoniques. En onboarding, un nouvel arrivant trouve immédiatement les contextes que ses collègues utilisent au quotidien.'],

      imageLabel: 'Mockup — Vue détaillée'
    },
    {
      chapter: 'Résultats · 05',
      title: 'Un nouvel usage adopté',
      body: [
      'Six semaines après déploiement sur 100 % des comptes, les indicateurs d\'adoption dépassent ce qu\'on avait modélisé.'],

      metrics: [
      { value: '84', unit: '%', label: 'des utilisateurs actifs ont créé au moins une vue' },
      { value: '3,2', unit: '×', label: 'plus de vues partagées que de vues privées' },
      { value: '−38', unit: '%', label: 'de temps passé à configurer des filtres' }]

    }],

    heroLabel: 'Hero — terrain / opérateurs',
    next: 'Tableaux de bord analytiques'
  } : {
    back: '← Back',
    meta: ['Case study', '2025 — 2026', '8 min'],
    title: 'From a filters overhaul to shared views',
    intro: 'How we turned a legacy filter system — slow, hard to discover, a daily source of friction — into a shared-views feature that became one of the product\'s collaboration pillars.',
    infos: [
    { label: 'Role', value: 'Lead product designer' },
    { label: 'Team', value: '1 PM · 1 designer · 4 engineers' },
    { label: 'Duration', value: '5 months · 09·2025 → 01·2026' },
    { label: 'Platform', value: 'Web desktop, enterprise' },
    { label: 'Shipping', value: 'Rolled out to 100% of accounts' }],

    sections: [
    {
      chapter: 'Context · 01',
      title: 'A tired filter system',
      body: [
      'Our product lets industrial planning teams supervise thousands of production orders in real time. The main board — where users spend 6 to 8 hours a day — relied on a filter system inherited from v1.',
      'Three complaints came up in every interview: filters were **slow to configure**, **hard to retrieve**, and **impossible to share**. Everyone rebuilt their own combinations, morning after morning.']

    },
    {
      chapter: 'Stake · 02',
      title: 'The problem wasn\'t visual',
      body: [
      'Early visual exploration showed the problem wasn\'t how filters looked but their **mental model**. Users didn\'t think in "filters" — they thought in **work contexts**: my overdue orders, line 2 this week, the night shift.'],

      quote: {
        text: 'I lose fifteen minutes every morning just finding what I was looking at yesterday. And if my colleague wants to see the same thing, I have to walk them through it click by click.',
        cite: 'Planner · 12 years tenure · Metz plant'
      }
    },
    {
      chapter: 'Solution · 03',
      title: 'Contexts, not filters',
      body: [
      'We pivoted to a model of **named, shareable, persistent views**. A view bundles a filter combination, a sort, a column set, and a zoom level. Private, team-shared, or account-wide.'],

      table: {
        headers: ['Dimension', 'Before', 'After'],
        rows: [
        ['Discovery', 'Three-level menu, buried in header', 'Dedicated sidebar, grouped by team'],
        ['Configuration', 'Modal with 14 fields', 'Inline composition, filter by filter'],
        ['Sharing', 'None — everyone rebuilt', 'Direct link, permissions, realtime'],
        ['Persistence', 'Lost on refresh', 'Server-saved, versioned']]

      },
      imageLabel: 'Diagram — before / after'
    },
    {
      chapter: 'Execution · 04',
      title: 'Details that made the difference',
      body: [
      'Three decisions had outsized impact on adoption. First, the **composable filter bar**: each filter is a chip you can add, reorder, or temporarily disable — without leaving the view.',
      'Then, the **draft vs saved split**: editing a shared view no longer overwrites it. Work is always a draft, published explicitly.',
      'Finally, **team views**: each team gets a space where leads pin 3 to 5 canonical views. New hires immediately find the contexts colleagues use daily.'],

      imageLabel: 'Mockup — Detailed view'
    },
    {
      chapter: 'Results · 05',
      title: 'A new usage, adopted',
      body: [
      'Six weeks after rolling out to 100% of accounts, adoption indicators exceed what we had modelled.'],

      metrics: [
      { value: '84', unit: '%', label: 'of active users created at least one view' },
      { value: '3.2', unit: '×', label: 'more shared views than private ones' },
      { value: '−38', unit: '%', label: 'less time spent configuring filters' }]

    }],

    heroLabel: 'Hero — field / operators',
    next: 'Analytics dashboards'
  };

  const renderRich = (txt) => {
    const parts = txt.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) => p.startsWith('**') && p.endsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : <React.Fragment key={i}>{p}</React.Fragment>);
  };

  return (
    <div className="case-wrap">
      <a className="case-back" onClick={() => go('home')}>{t.back}</a>
      <div className="case-meta">
        {t.meta.map((m, i) =>
        <React.Fragment key={i}>
            <span>{m}</span>
            {i < t.meta.length - 1 && <span>·</span>}
          </React.Fragment>
        )}
      </div>
      <h1 className="case-title">{t.title}</h1>
      <p className="case-intro">{t.intro}</p>

      <div className="case-hero-img">
        <img src="assets/shared-views.png?v=2" alt={t.heroLabel} />
      </div>

      <div className="case-infos">
        {t.infos.map((info, i) =>
        <div className="case-info" key={i}>
            <div className="label">{info.label}</div>
            <div className="value">{info.value}</div>
          </div>
        )}
      </div>

      {t.sections.map((sec, i) =>
      <section className="case-section" key={i}>
          <div className="case-chapter">{sec.chapter}</div>
          <h2 className="case-h2">{sec.title}</h2>
          {sec.body.map((p, j) => <p key={j}>{renderRich(p)}</p>)}
          {sec.quote &&
        <div className="case-quote">
              <p style={{ fontFamily: "Inter", fontSize: "18px", fontWeight: "600" }}>« {sec.quote.text} »</p>
              <cite>— {sec.quote.cite}</cite>
            </div>
        }
          {sec.table &&
        <div className="case-compare">
              <div className="case-compare-head">
                {sec.table.headers.map((h, k) => <div key={k}>{h}</div>)}
              </div>
              {sec.table.rows.map((row, k) =>
          <div className="case-compare-row" key={k}>
                  <div className="row-label">{row[0]}</div>
                  <div>{row[1]}</div>
                  <div>{row[2]}</div>
                </div>
          )}
            </div>
        }
          {sec.imageLabel &&
        <div className="case-img">
              <span className="case-img-label">{sec.imageLabel}</span>
            </div>
        }
          {sec.metrics &&
        <div className="case-metrics">
              {sec.metrics.map((m, k) =>
          <div className="case-metric" key={k}>
                  <div className="case-metric-value">{m.value}<span className="unit">{m.unit}</span></div>
                  <div className="case-metric-label">{m.label}</div>
                </div>
          )}
            </div>
        }
        </section>
      )}

      <div className="case-next">
        <a onClick={() => go('home')}>→ {t.next}</a>
      </div>
    </div>);

}

Object.assign(window, { CaseStudyCargo });