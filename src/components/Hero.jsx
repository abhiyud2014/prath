import { useEffect, useRef, useState } from 'react';

const phrases = [
  '// Security Operations Engineer · Accenture',
  '// Threat Detection & Incident Response',
  '// SIEM · EDR/XDR · KQL · SOAR · DFIR',
  '// Top 3% on TryHackMe',
];

function useTypewriter() {
  const [text, setText] = useState('');
  const state = useRef({ pi: 0, ci: 0, deleting: false });

  useEffect(() => {
    let timeout;
    const tick = () => {
      const { pi, ci, deleting } = state.current;
      const cur = phrases[pi];
      if (!deleting) {
        const next = ci + 1;
        setText(cur.slice(0, next));
        state.current.ci = next;
        if (next === cur.length) {
          state.current.deleting = true;
          timeout = setTimeout(tick, 1900);
        } else {
          timeout = setTimeout(tick, 55);
        }
      } else {
        const next = ci - 1;
        setText(cur.slice(0, next));
        state.current.ci = next;
        if (next === 0) {
          state.current.deleting = false;
          state.current.pi = (pi + 1) % phrases.length;
          timeout = setTimeout(tick, 400);
        } else {
          timeout = setTimeout(tick, 28);
        }
      }
    };
    timeout = setTimeout(tick, 900);
    return () => clearTimeout(timeout);
  }, []);

  return text;
}

function useCounter(target, duration = 1200, delay = 600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(target * e));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(t);
  }, [target, duration, delay]);
  return val;
}

export default function Hero() {
  const text = useTypewriter();
  const c1 = useCounter(20);
  const c2 = useCounter(100);
  const c3 = useCounter(40);

  return (
    <div className="hero">
      <div className="hg1" /><div className="hg2" />
      <div className="hi">
        <div>
          <div className="badge">Available for opportunities</div>
          <h1>
            <span className="nl2">Priyansu</span>
            <span className="nl2">Rath</span>
            <span className="al">SOC Engineer</span>
          </h1>
          <p className="hsub">
            {text}<span className="tc">|</span>
          </p>
          <p className="hdesc">
            Results-driven Security Operations Engineer with 2+ years of experience in 24/7 SOC environments.
            Hands-on expertise with Azure Sentinel, CrowdStrike XDR, Splunk, and KQL analytics — engineering
            custom detection rules and automating triage workflows.
          </p>
          <div className="hbtns">
            <button className="bp" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
              View Experience
            </button>
            <button className="bs" onClick={() => window.open('mailto:muniapriyansu@gmail.com')}>
              Get in Touch
            </button>
          </div>
        </div>
        <div className="hs">
          <div className="sc">
            <div className="sn">2<span>+ yrs</span></div>
            <div className="sl">SOC & Security Engineering</div>
          </div>
          <div className="sr">
            <div className="sc"><div className="sn">{c1}<span>+</span></div><div className="sl">Daily Incidents</div></div>
            <div className="sc"><div className="sn"><span>{c2}</span>%</div><div className="sl">SLA Compliance</div></div>
            <div className="sc"><div className="sn">Top<span> 3%</span></div><div className="sl">TryHackMe</div></div>
            <div className="sc"><div className="sn"><span>{c3}</span>%</div><div className="sl">Triage Reduction</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
