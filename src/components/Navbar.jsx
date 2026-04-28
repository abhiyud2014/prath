import { useState } from 'react';

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav>
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          P<span>.</span>Rath
        </div>
        <ul className="nl">
          {navItems.map(({ id, label }) => (
            <li key={id}><a onClick={() => go(id)}>{label}</a></li>
          ))}
        </ul>
        <div className="nr">
          <div className="tt">
            {['dark', 'light', 'cyber'].map((t) => (
              <button key={t} className={`tb${theme === t ? ' active' : ''}`} onClick={() => setTheme(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <a
            className="ncta"
            href="/Priyansu_Rath_SOC_Analyst_Resume.pdf"
            download
          >
            Download CV
          </a>
        </div>
        <button className="hb" onClick={() => setMenuOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mm${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ id, label }) => (
          <a key={id} onClick={() => { go(id); closeMenu(); }}>{label}</a>
        ))}
        <div className="mtr">
          {['dark', 'light', 'cyber'].map((t) => (
            <button key={t} className={`tb${theme === t ? ' active' : ''}`} onClick={() => setTheme(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
