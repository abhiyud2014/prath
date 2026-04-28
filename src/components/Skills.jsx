const skillGroups = [
  { icon: '📊', name: 'SIEM & Analytics', tags: ['Azure Sentinel', 'Splunk', 'KQL (Kusto)', 'Azure Monitor Agent', 'Sentinel Watchlists'] },
  { icon: '🕵️', name: 'EDR / XDR & Endpoint', tags: ['CrowdStrike Falcon EDR/XDR', 'MS Defender for Cloud', 'Carbon Black'] },
  { icon: '☁️', name: 'Cloud & Identity', tags: ['Microsoft Entra ID', 'Azure AD', 'IAM / PAM', 'Microsoft Purview', 'SC-300'] },
  { icon: '🌐', name: 'Network & DLP', tags: ['Netskope DLP', 'Microsoft Purview DLP', 'Cisco IronPort', 'Palo Alto XSOAR', 'Snort'] },
  { icon: '🔍', name: 'Forensics & DFIR', tags: ['Digital Forensics', 'Packet Analysis', 'Attack Chain Reconstruction', 'Volatility', 'Autopsy'] },
  { icon: '⚙️', name: 'Automation & DevOps', tags: ['SOAR', 'Python', 'Regex', 'PowerShell', 'Docker', 'Kubernetes', 'Git'] },
  { icon: '🧠', name: 'Threat Intelligence', tags: ['MITRE ATT&CK', 'Threat Hunting', 'IOC Analysis', 'Phishing Analysis', 'PhishTool'] },
  { icon: '💻', name: 'Programming', tags: ['Python', 'Java', 'JavaScript', 'KQL', 'PowerShell', 'Active Directory'] },
];

export default function Skills() {
  return (
    <div className="sw" id="skills">
      <p className="slb fu">// 02 — Skills</p>
      <h2 className="st fu">Technical Arsenal</h2>
      <p className="ss fu">Comprehensive expertise across security platforms, cloud tools, automation, and threat operations.</p>
      <div className="skl">
        {skillGroups.map((g) => (
          <div key={g.name} className="sg fu">
            <div className="sgi">{g.icon}</div>
            <div className="sgn">{g.name}</div>
            <div className="stags">
              {g.tags.map((t) => <span key={t} className="stag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
