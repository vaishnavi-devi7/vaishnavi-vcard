import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import './App.css';

function App() {
  const handleSaveContact = () => {
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
    <div className="card-wrapper">
      <div className="v-card reveal">
        
        {/* TOP NAV */}
        <div className="card-header reveal delay-1">
          <div className="header-left">
            <div className="monogram">VD</div>
            <span>CLOUD / AI / SOFTWARE</span>
          </div>
          <div className="header-right">
            <span>2026</span>
            <span>DEV.</span>
          </div>
        </div>

        {/* MAIN BODY */}
        <div className="card-body">
          <div className="body-left reveal delay-2">
            <h1 className="name-display">
              <span>VAISHNAVI</span>
              <span className="italic">DEVI S E</span>
            </h1>
            
            <div className="statement">
              <p className="tagline">
                Building intelligent systems<br />
                from ideas &rarr; code &rarr; reality.
              </p>
              <div className="location">
                <span className="status-dot"></span>
                CHENNAI, INDIA
              </div>
            </div>

            <div className="links-group reveal delay-3">
              <a href="https://www.linkedin.com/in/vaishnavidevi07/" target="_blank" rel="noopener noreferrer" className="link-item">
                <span>LINKEDIN</span>
                <ArrowUpRight className="link-arrow" size={14} strokeWidth={2} />
              </a>
              
              <a href="https://github.com/vaishnavi-devi7" target="_blank" rel="noopener noreferrer" className="link-item">
                <span>GITHUB</span>
                <ArrowUpRight className="link-arrow" size={14} strokeWidth={2} />
              </a>
              
              <a href="mailto:se.vaishnavidevi07@gmail.com" className="link-item">
                <span>EMAIL</span>
                <ArrowUpRight className="link-arrow" size={14} strokeWidth={2} />
              </a>
              
              <a href="tel:+917358668550" className="link-item">
                <span>CALL</span>
                <ArrowUpRight className="link-arrow" size={14} strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="body-right reveal delay-3">
            <div className="visual-container"></div>
          </div>
        </div>

        {/* CARD FOOTER */}
        <div className="card-footer reveal delay-4">
          <button className="save-btn" onClick={handleSaveContact}>
            + SAVE CONTACT
            <ArrowDown className="save-icon" size={14} strokeWidth={2} />
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
