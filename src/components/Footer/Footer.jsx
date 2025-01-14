import React from 'react';
import './Footer.css';
import ditlogo from '../../assets/images/dit.jpg';
import nitlogo from '../../assets/images/nit.png';
import mrsilogo from '../../assets/images/MRSI-Logo.png';
import ncrasps from '../../assets/images/NCRAPSLogo.jpeg';
import ISDT from '../../assets/images/isdt.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src={ditlogo} alt="Logo 1" />
        <img src={nitlogo} alt="Logo 2" />
        <img src={ncrasps} alt="Logo 3" />
        <img src={mrsilogo} alt="Logo 4" />
        <img src={ISDT} alt="Logo 5" />
      </div>
      <div className="footer-text">
        <p>DIT UNIVERSITY</p>
        <p>Mussoorie, Diversion Road, Makka Wala, Uttarakhand 248009</p>
      </div>
    </footer>
  );
};

export default Footer;
