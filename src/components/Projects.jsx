const projects = [
  {
    tag: 'Detection Engineering',
    title: 'KQL Analytics Rule Engineering',
    tool: 'Microsoft Sentinel · Azure Monitor Agent',
    desc: 'Engineered 20+ custom KQL analytics rules in Microsoft Sentinel to expand threat detection coverage across cloud-native and hybrid infrastructure environments.',
    bullets: ['20+ custom detection rules deployed', 'Reduced alert noise by 19% via logic fixes', 'Sentinel Watchlists for benign scan categorization'],
  },
  {
    tag: 'Email Security',
    title: 'Phishing Triage Automation',
    tool: 'KQL · Regex · Microsoft Sentinel',
    desc: 'Built KQL-based domain visualization and Regex body analysis to automatically classify marketing vs. phishing emails, cutting manual triage workload significantly.',
    bullets: ['40% reduction in manual triage workload', 'Automated IOC extraction workflows', 'Created reusable email security playbooks'],
  },
  {
    tag: 'Vulnerability Management',
    title: 'Vulnerability Assessment',
    tool: 'OpenVAS Security Scanner',
    desc: 'Deployed OpenVAS as an open-source alternative to Qualys for comprehensive enterprise vulnerability scanning across 50+ systems.',
    bullets: ['Scanned 50+ systems — 200+ CVEs identified', 'Achieved 90% patch compliance', 'Implemented automated scan schedules'],
  },
  {
    tag: 'Blue Team Labs',
    title: 'TryHackMe SOC Labs',
    tool: 'SOC Operations · Digital Forensics · Threat Hunting',
    desc: 'Completed 150+ hands-on cybersecurity labs covering incident response, digital forensics, network traffic analysis, and threat hunting — top 3% globally.',
    bullets: ['150+ labs completed across SOC & DFIR paths', 'Windows event log & malware analysis', 'Top 3% global platform ranking'],
  },
];

export default function Projects() {
  return (
    <div className="sw" id="projects">
      <p className="slb fu">// 03 — Projects</p>
      <h2 className="st fu">Featured Work</h2>
      <p className="ss fu">Hands-on security engineering projects demonstrating real-world detection, automation, and DFIR operations.</p>
      <div className="pg">
        {projects.map((p) => (
          <div key={p.title} className="pc2 fu">
            <div className="ptag">{p.tag}</div>
            <div className="ptit">{p.title}</div>
            <div className="ptool">{p.tool}</div>
            <div className="pdesc">{p.desc}</div>
            <ul className="pbul">
              {p.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
