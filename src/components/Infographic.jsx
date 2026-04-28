import { useEffect, useRef, Fragment } from 'react';

const Arrow = () => (
  <div className="sa">
    <svg viewBox="0 0 36 14">
      <line className="al2" x1="0" y1="7" x2="28" y2="7" />
      <polygon className="ah" points="28,3 36,7 28,11" />
    </svg>
  </div>
);

const steps = [
  { icon: '📡', label: 'Log\nIngestion' },
  { icon: '🔍', label: 'SIEM\nCorrelation' },
  { icon: '🚨', label: 'Alert\nTriage' },
  { icon: '🕵️', label: 'EDR\nInvestigation' },
  { icon: '📧', label: 'Phishing\nAnalysis' },
  { icon: '🔒', label: 'DLP\nMonitoring' },
  { icon: '📋', label: 'Incident\nResponse' },
  { icon: '📊', label: 'Report\n& Close' },
];

const tools = [
  { name: 'Microsoft Sentinel / KQL', val: 93 },
  { name: 'CrowdStrike Falcon EDR/XDR', val: 90 },
  { name: 'Splunk SIEM', val: 85 },
  { name: 'Microsoft Entra ID / Purview', val: 82 },
  { name: 'Netskope DLP', val: 80 },
  { name: 'SOAR / Python Automation', val: 75 },
  { name: 'Digital Forensics / DFIR', val: 72 },
  { name: 'Docker / Kubernetes', val: 65 },
];

function RadarChart({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const W = 280, H = 280;
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) / 2 - 32;

    const labels = ['SIEM', 'EDR', 'Email Sec', 'DLP', 'DFIR', 'Threat Intel', 'Network', 'Scripting'];
    const values = [0.92, 0.88, 0.85, 0.75, 0.68, 0.78, 0.72, 0.65];
    const n = labels.length;

    const colors = {
      dark: { s: '#00e5a0', f: 'rgba(0,229,160,.11)', g: 'rgba(0,229,160,.09)', tx: '#8892a4' },
      light: { s: '#0077cc', f: 'rgba(0,119,204,.13)', g: 'rgba(0,0,0,.08)', tx: '#475569' },
      cyber: { s: '#bf00ff', f: 'rgba(191,0,255,.14)', g: 'rgba(191,0,255,.1)', tx: '#a07fc0' },
    };
    const col = colors[theme] || colors.dark;

    ctx.clearRect(0, 0, W, H);

    for (let ring = 1; ring <= 4; ring++) {
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const a = (Math.PI * 2 / n) * i - Math.PI / 2;
        const r = (ring / 4) * R;
        i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a)) : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
      }
      ctx.closePath();
      ctx.strokeStyle = col.g;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 / n) * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a));
      ctx.strokeStyle = col.g;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 / n) * i - Math.PI / 2;
      const r = values[i] * R;
      i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a)) : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
    ctx.closePath();
    ctx.fillStyle = col.f;
    ctx.fill();
    ctx.strokeStyle = col.s;
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 / n) * i - Math.PI / 2;
      const r = values[i] * R;
      ctx.beginPath();
      ctx.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), 4, 0, Math.PI * 2);
      ctx.fillStyle = col.s;
      ctx.fill();
    }

    ctx.font = '10px DM Mono,monospace';
    ctx.fillStyle = col.tx;
    ctx.textAlign = 'center';
    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 / n) * i - Math.PI / 2;
      ctx.fillText(labels[i], cx + (R + 18) * Math.cos(a), cy + (R + 18) * Math.sin(a) + 4);
    }
  }, [theme]);

  return <canvas ref={canvasRef} id="rc" width="280" height="280" />;
}

export default function Infographic({ theme }) {
  const sectionRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const bars = document.querySelectorAll('.pbf');
        bars.forEach((b, i) => {
          setTimeout(() => { b.style.width = b.getAttribute('data-w') + '%'; }, 300 + i * 60);
        });
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="infographic">
      <div className="ii">
        <p className="slb">// SOC Operations Flow</p>
        <h2 className="st fu">How I Defend Your Infrastructure</h2>
        <p className="ss fu">An interactive look at the end-to-end threat detection and response pipeline.</p>
        <div className="sf" ref={sectionRef}>
          {steps.map((s, i) => (
            <Fragment key={s.label}>
              <div className="sn2 fu">
                <div className="si"><div className="pr" />{s.icon}</div>
                <div className="snl" dangerouslySetInnerHTML={{ __html: s.label.replace('\n', '<br>') }} />
              </div>
              {i < steps.length - 1 && <Arrow />}
            </Fragment>
          ))}
        </div>
        <div className="ib">
          <div className="rw fl">
            <div className="rt">Threat Domain Coverage</div>
            <RadarChart theme={theme} />
          </div>
          <div className="tp fu">
            <h3>Tool Proficiency</h3>
            <div className="pb">
              {tools.map((t) => (
                <div key={t.name} className="pbr">
                  <div className="pbl"><span>{t.name}</span><span>{t.val}%</span></div>
                  <div className="pbt"><div className="pbf" data-w={t.val} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
