/* App root — Cargo-first */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "typo": "editorial",
  "layout": "cargo"
}/*EDITMODE-END*/;

function App() {
  const [lang, setLang] = React.useState(() => localStorage.getItem('portfolio.lang') || 'fr');
  const [page, setPage] = React.useState(() => localStorage.getItem('portfolio.page') || 'home');
  const [typo, setTypo] = React.useState(() => localStorage.getItem('portfolio.typo') || TWEAK_DEFAULTS.typo);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);

  React.useEffect(() => { localStorage.setItem('portfolio.lang', lang); document.documentElement.lang = lang; }, [lang]);
  React.useEffect(() => { localStorage.setItem('portfolio.page', page); }, [page]);
  React.useEffect(() => {
    // Migration: reset typo if invalid
    const validTypos = ['editorial', 'grotesque', 'geometric', 'classic', 'technical', 'expressive'];
    if (!validTypos.includes(localStorage.getItem('portfolio.typo'))) {
      localStorage.setItem('portfolio.typo', 'editorial');
      setTypo('editorial');
    }
  }, []);

  React.useEffect(() => { localStorage.setItem('portfolio.typo', typo); document.body.className = `typo-${typo}`; }, [typo]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const msg = e.data || {};
      if (msg.type === '__activate_edit_mode') setTweaksOpen(true);
      if (msg.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  React.useEffect(() => {
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { typo } }, '*');
  }, [typo]);

  React.useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const go = (p) => setPage(p);

  return (
    <>
      {page === 'home' ? (
        <CargoLayout lang={lang} setLang={setLang} go={go} />
      ) : (
        <CaseStudyCargo lang={lang} go={go} />
      )}
      {tweaksOpen && <TweaksSimple typo={typo} setTypo={setTypo} />}
    </>
  );
}

function TweaksSimple({ typo, setTypo }) {
  const typos = [
    { id: 'editorial', label: 'Editorial', sub: 'Instrument Serif + JetBrains Mono' },
    { id: 'grotesque', label: 'Grotesque', sub: 'Inter (all-around)' },
    { id: 'geometric', label: 'Geometric', sub: 'Space Grotesk + IBM Plex Mono' },
    { id: 'classic', label: 'Classic', sub: 'Libre Caslon + Inter' },
    { id: 'technical', label: 'Technical', sub: 'GT America-style + Space Mono' },
    { id: 'expressive', label: 'Expressive', sub: 'Newsreader Italic + Söhne-style' },
  ];
  return (
    <div className="tweaks-panel">
      <h5>Tweaks</h5>
      <div className="tweak-label">Typography</div>
      <div className="tweak-stack">
        {typos.map((tp) => (
          <button key={tp.id} className={`tweak-btn-stack ${typo === tp.id ? 'active' : ''}`} onClick={() => setTypo(tp.id)}>
            <span className="tweak-btn-label">{tp.label}</span>
            <span className="tweak-btn-sub">{tp.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

if (!window.__portfolioRoot) {
  window.__portfolioRoot = ReactDOM.createRoot(document.getElementById('root'));
}
window.__portfolioRoot.render(<App />);
