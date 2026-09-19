import React from 'react';
import { Linkedin, Github, Mail, Phone, ArrowDownToLine } from 'lucide-react';
import './App.css';

function App() {
  const handleSaveContact = () => {
    // Correct vCard format for iPhone & Android
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:S E;Vaishnavi Devi;;;
FN:Vaishnavi Devi S E
ORG:Cloud · AI · Software
TITLE:Cloud · AI · Software Developer
TEL;TYPE=CELL,VOICE:+917358668550
EMAIL;TYPE=WORK,INTERNET:se.vaishnavidevi07@gmail.com
URL:https://github.com/vaishnavi-devi7
URL:https://www.linkedin.com/in/vaishnavidevi07/
ADR;TYPE=HOME:;;;Chennai;;;India
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Vaishnavi-Devi.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-container">
      <div className="monogram animate-fade-in delay-1">VD</div>
      
      <header className="header animate-fade-in delay-2">
        <h1 className="name">VAISHNAVI DEVI S E</h1>
        <p className="role">CLOUD · AI · SOFTWARE</p>
        
        <p className="tagline">
          Building intelligent systems<br/>
          from ideas &rarr; code &rarr; reality.
        </p>

        <div className="status">
          <span className="status-dot"></span>
          BUILDING / LEARNING / SHIPPING
        </div>
      </header>

      <main className="animate-fade-in delay-3">
        <div className="links-grid">
          <a href="https://www.linkedin.com/in/vaishnavidevi07/" target="_blank" rel="noopener noreferrer" className="link-card">
            <Linkedin className="link-icon" size={24} strokeWidth={1.5} />
            <span className="link-label">LinkedIn</span>
            <span className="link-sub">Connect</span>
          </a>
          
          <a href="https://github.com/vaishnavi-devi7" target="_blank" rel="noopener noreferrer" className="link-card">
            <Github className="link-icon" size={24} strokeWidth={1.5} />
            <span className="link-label">GitHub</span>
            <span className="link-sub">Repositories</span>
          </a>
          
          <a href="mailto:se.vaishnavidevi07@gmail.com" className="link-card">
            <Mail className="link-icon" size={24} strokeWidth={1.5} />
            <span className="link-label">Email</span>
            <span className="link-sub">Get in touch</span>
          </a>
          
          <a href="tel:+917358668550" className="link-card">
            <Phone className="link-icon" size={24} strokeWidth={1.5} />
            <span className="link-label">Call</span>
            <span className="link-sub">+91 7358668550</span>
          </a>
        </div>
      </main>

      <section className="action-section animate-fade-in delay-4">
        <button className="save-btn" onClick={handleSaveContact}>
          SAVE CONTACT <ArrowDownToLine size={18} strokeWidth={2} />
        </button>
      </section>

      <footer className="footer animate-fade-in delay-4">
        <span>CHENNAI, INDIA</span>
        <span>&copy; 2026 VAISHNAVI DEVI</span>
      </footer>
    </div>
  );
}

export default App;
