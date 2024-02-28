import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="header-logo" src="logo.png" alt="Logo" />
      </header>
      <main className="main-container">
        <div className="contents">
          <div className="trophy">
            <img className="main-img" src="AWARD.png" alt="" />
          </div>
          <div className="main-text-area">
            <p className="text-area">
              <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
              <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
              </ul>
            </p>
            <img src="2.png" alt="" className="intro-img" />
            Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </div>
        </div>
        <div className="mid-contents">
        <div className='main-last-text'>
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        </div>
          <img className="mid-img" src="3.png" alt="" />
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div>
        <div className="last-contents">
          <p>
            <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
          </p>
          <span className="span-start">CHEMICALS & PROCESS</span>
          <span className="span-items">POWER</span>
          <span className="span-items">WATER & WASTE WATER</span>
          <span className="span-items">OILS & GAS PHARMA</span>
          <span className="span-items">SUGARS & DISTILLERIES</span>
          <span className="span-items">PAPER & PULP</span>
          <span className="span-items">MARINE & DEFENCE</span>
          <span className="span-items">METAL & MINING</span>
          <span className="span-items">FOOD & BEVERAGE</span>
          <span className="span-items">PETROCHEMICAL & REFINERIES</span>
          <span className="span-items">SOLAR</span>
          <span className="span-items">BUILDING</span>
          <span className="span-items">HVAC</span>
          <span className="span-items">FIRE FIGHTING</span>
          <span className="span-last">AGRICULTURE & RESIDENTIAL</span>
        </div>
      </main>
      <footer className="footer-container">
        <div className="footer-contents">
          <p>
            <img className="footer-icon" src="call.png" alt="" />Toll Free: <strong>1800 2000 1234</strong>
          </p>
          <p>
            <img className="footer-icon" src="facebook.png" alt="" />www.facebook.com/cripumps
          </p>
          <p>
            <img className="footer-icon" src="web.png" alt="" />www.crigroups.com
          </p>
        </div>
      </footer>
    </div>
  );
}
export default App;

 // "homepage": "https://Kshitij-Baga.github.io/C.R.I-Demo-Project",
//  "predeploy": "npm run build",
//  "deploy": "gh-pages -b master -d build",
