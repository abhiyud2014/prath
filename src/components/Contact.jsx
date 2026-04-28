export default function Contact() {
  return (
    <div id="contact" className="cs">
      <div className="cg2" />
      <p className="slb fu">// 05 — Contact</p>
      <h2 className="ct fu">Let's Build<br /><span>Something Secure</span></h2>
      <p className="cd fu">Open to SOC analyst roles, security consulting, and cybersecurity collaborations.</p>
      <div className="cls fu">
        <button className="cl prim" onClick={() => window.open('mailto:muniapriyansu@gmail.com')}>Email Me</button>
        <span className="cl" style={{ cursor: 'default' }}>+91 79783 84911</span>
        <button className="cl" onClick={() => window.open('https://tryhackme.com/muniapriyansu')}>TryHackMe</button>
      </div>
    </div>
  );
}
