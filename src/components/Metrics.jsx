import { useEffect, useRef, useState } from 'react';

const metrics = [
  { target: 20, suffix: '+', label: 'Daily Incidents' },
  { target: 100, suffix: '%', label: 'SLA Compliance' },
  { target: 150, suffix: '+', label: 'THM Labs Completed' },
  { target: 40, suffix: '%', label: 'Triage Reduction' },
  { target: 20, suffix: '+', label: 'KQL Detection Rules' },
  { target: 19, suffix: '%', label: 'Alert Noise Reduced' },
];

function MetricCard({ target, suffix, label }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 1200, 1);
          const e = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * e));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="met fu" ref={ref}>
      <div className="mn">{val}{suffix}</div>
      <div className="ml">{label}</div>
    </div>
  );
}

export default function Metrics() {
  return (
    <div className="ms">
      <div className="mi">
        <p className="slb">// Operational Impact</p>
        <h2 className="st">By the Numbers</h2>
        <div className="mg">
          {metrics.map((m) => <MetricCard key={m.label} {...m} />)}
        </div>
      </div>
    </div>
  );
}
