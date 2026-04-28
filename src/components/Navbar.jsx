import { useState, useEffect, useRef } from 'react';

const go = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'infographic', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 960) closeMenu(); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div ref={menuRef}>
      <nav>
        <div
          className="logo"
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}
          style={{ cursor: 'pointer' }}
        >
          P<span>.</span>Rath
        </div>

        {/* Desktop nav links */}
        <ul className="nl">
          {navItems.map(({ id, label }) => (
            <li key={id}><a onClick={() => go(id)}>{label}</a></li>
          ))}
        </ul>

        {/* Desktop right controls */}
        <div className="nr">
          <div className="tt">
            {['dark', 'light', 'cyber'].map((t) => (
              <button key={t} className={`tb${theme === t ? ' active' : ''}`} onClick={() => setTheme(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <a className="ncta" href="/Priyansu_Rath_SOC_Analyst_Resume.pdf" download>
            Download CV
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className={`hb${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mm${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ id, label }) => (
          <a key={id} onClick={() => { go(id); closeMenu(); }}>{label}</a>
        ))}
        <div className="mm-bottom">
          <div className="mtr">
            {['dark', 'light', 'cyber'].map((t) => (
              <button key={t} className={`tb${theme === t ? ' active' : ''}`} onClick={() => setTheme(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <a className="mm-cv" href="/Priyansu_Rath_SOC_Analyst_Resume.pdf" download>
            ↓ Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
