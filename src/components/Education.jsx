const certs = [
  { icon: '🔐', name: 'CompTIA Security+ (SY0-701)', issuer: 'CompTIA' },
  { icon: '☁️', name: 'SC-200: Security Operations Analyst Associate', issuer: 'Microsoft' },
  { icon: '🪪', name: 'SC-300: Identity & Access Administrator Associate', issuer: 'Microsoft' },
  { icon: '🛡️', name: 'SC-401: Information Security Administrator Associate', issuer: 'Microsoft' },
  { icon: '🔑', name: 'SC-900: Security, Compliance & Identity Fundamentals', issuer: 'Microsoft' },
  { icon: '☁️', name: 'AZ-900: Azure Fundamentals', issuer: 'Microsoft' },
];

export default function Education() {
  return (
    <div className="sw" id="education">
      <p className="slb fu">// 04 — Education</p>
      <h2 className="st fu">Academic Background</h2>
      <p className="ss fu">Strong foundation in computer science and cybersecurity.</p>
      <div className="eg fu">
        <div className="edc">
          <div className="edn">01</div>
          <div className="edd">B.Tech — CSE</div>
          <div className="eds">KIIT Deemed University, Bhubaneswar</div>
          <div className="eddet">2020 – 2024. Cybersecurity, network security, and software development.</div>
          <div className="edsc">CGPA: 8.75 / 10.0</div>
        </div>
        <div className="edc">
          <div className="edn">02</div>
          <div className="edd">12th Grade — ISC Science</div>
          <div className="eds">Stewart School, Bhubaneswar</div>
          <div className="eddet">2018 – 2020. Computer science, mathematics, and physics.</div>
          <div className="edsc">63%</div>
        </div>
      </div>

      <div id="certifications" style={{ scrollMarginTop: '80px' }}>
      <p className="slb fu" style={{ marginTop: '3rem', marginBottom: '.4rem' }}>// Certifications</p>
      <h3 className="fu" style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '.3rem', letterSpacing: '-.02em' }}>
        Industry Credentials
      </h3>
      <div className="cg">
        {certs.map((c) => (
          <div key={c.name} className="cc fu">
            <div className="ci">{c.icon}</div>
            <div>
              <div className="cn">{c.name}</div>
              <div className="ciss">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
