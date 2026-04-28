const achievements = [
  { title: 'Incident Monitoring', desc: <>Monitored and investigated <strong>20+ daily incidents</strong> across multi-tenant cloud environments via AMA and CrowdStrike Falcon XDR, including Netskope DLP investigations.</> },
  { title: 'Digital Forensics & IR', desc: <>Performed DFIR using CrowdStrike Falcon EDR, Microsoft Sentinel, and Splunk to identify initial access vectors, lateral movement, and business impact.</> },
  { title: 'KQL Detection Engineering', desc: <>Engineered <strong>20+ custom KQL analytics rules</strong> in Microsoft Sentinel to expand threat detection coverage across cloud-native and hybrid infrastructure.</> },
  { title: 'Phishing Automation', desc: <>Built KQL domain visualization and Regex body analysis to auto-classify phishing vs. marketing emails, reducing manual triage workload by <strong>40%</strong>.</> },
  { title: 'Identity Protection', desc: <>Optimized Microsoft Entra ID alert pipeline, achieving <strong>40% reduction in alert volume</strong> while enhancing detection precision for compromised credentials.</> },
  { title: 'Alert Noise Reduction', desc: <>Remediated logic flaws in detection queries, reducing aggregate alert noise by <strong>19%</strong> and deployed Sentinel Watchlists to lower false-positive rates.</> },
];

const internships = [
  {
    role: 'Security Delivery Intern',
    company: 'Accenture',
    period: 'Mar 2024 – Jun 2024',
    location: 'Gurugram, India',
    desc: 'Completed Security+ equivalent training with hands-on Splunk SIEM investigations, log analysis, and security event triage in a structured SOC environment.',
  },
  {
    role: 'Software Development Intern',
    company: 'HighRadius',
    period: 'Apr 2023 – Sep 2023',
    location: 'Remote',
    desc: 'Automated invoice processing pipeline using Java, Spring Boot, and Puppeteer; authored Regex patterns for OCR-based data extraction, improving accuracy of invoice-to-portal ingestion workflows.',
  },
];

export default function Experience() {
  return (
    <div className="sw" id="experience">
      <p className="slb fu">// 01 — Experience</p>
      <h2 className="st fu">Where I've Worked</h2>
      <p className="ss fu">2+ years building security operations excellence across enterprise cloud environments.</p>

      {/* Full-time role */}
      <div className="ec fu">
        <div className="eh">
          <div>
            <div className="er">Security Analyst & Engineer</div>
            <div className="eco">Accenture</div>
          </div>
          <div>
            <div className="ep">Aug 2024 — Present</div>
            <div className="el">Gurugram, India</div>
          </div>
        </div>
        <p style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Leading security operations and incident response for enterprise clients across multi-tenant cloud environments.
          Protecting critical infrastructure through advanced threat detection, KQL engineering, and 24/7 SOC monitoring.
        </p>
        <div className="ag">
          {achievements.map((a) => (
            <div key={a.title} className="ach">
              <div className="ach-t">{a.title}</div>
              <div className="ach-d">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Internships */}
      <h3 className="fu" style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.2rem', fontWeight: 700, margin: '2.5rem 0 1.2rem', letterSpacing: '-.02em', color: 'var(--text)' }}>
        Internships
      </h3>
      {internships.map((i) => (
        <div key={i.role} className="ec fu" style={{ marginBottom: '1.2rem' }}>
          <div className="eh">
            <div>
              <div className="er" style={{ fontSize: '1.1rem' }}>{i.role}</div>
              <div className="eco">{i.company}</div>
            </div>
            <div>
              <div className="ep">{i.period}</div>
              <div className="el">{i.location}</div>
            </div>
          </div>
          <p style={{ fontSize: '.88rem', color: 'var(--text2)', lineHeight: 1.8 }}>{i.desc}</p>
        </div>
      ))}
    </div>
  );
}
