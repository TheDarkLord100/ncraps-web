import React, { useState } from 'react';
import './HeroPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Countdown from '../../components/Countdown/Countdown';
import NCRAPS from '../../assets/images/NCRAPSLogo.jpeg';

const HeroSection = () => {

  return (
    <>
      <Navbar/>
      <section className="hero">
        <div className="hero-content">
        <div className="main">
              <div className="main-content">
                <marquee className="marquee" behavior="scroll" direction="left">
                  *Participants with valid reasons may be allowed to present their work online at NCRAPS 2025 upon request.*
                </marquee>
                <h3 className="top">6th National Conference</h3>
                <h3>On</h3>
                <h1>RECENT ADVANCEMENT IN PHYSICAL SCIENCES</h1>
                <div className="center-img-container">
                  <img src={NCRAPS} alt="NCRAPS Logo" className="center-img" />
                </div>
                <p className="organized-by">
                  <span>jointly organized by</span> <br />
                  School of Physical Sciences, DIT University, Dehradun
                  <br />
                  National Institute of Technology, Uttarakhand
                </p>
                <p className="association-with">
                  <span>In association with</span>
                  <br />
                  MRSI, Delhi Chapter <span>&</span>
                  <br />
                  ISDT, DRDO
                </p>
                <p className="date">14 – 15 February 2025</p>
                <Countdown />
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
