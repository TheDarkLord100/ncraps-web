import React, { useState } from 'react';
import './HeroPage.css';
import Navbar from '../../components/Navbar/Navbar';
import brochure from '../../assets/Brochure.pdf';
import NCRAPS from '../../assets/images/NCRAPSLogo.jpeg';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Default to 'Home' to show initial content

  const handleTabClick = (tabName) => {
    console.log(`Tab clicked: ${tabName}`);
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <>
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
                  MRSI, Delhi Chapter
                </p>
                <p className="date">14 – 15 February 2025</p>
              </div>
            </div>
          </>
        );
      case 'About':
        return <h1 key="about">About the Conference</h1>;
      case 'Important Dates':
        return <h1 key="date">Important Dates</h1>;
      case 'Registrations':
        return <h1>Registration Details</h1>;
      case 'Submission':
        return <h1>Paper Submission Details</h1>;
      case 'Team':
        return <h1>Meet the NCRAPS Team</h1>;
      case 'Advisory':
        return <h1>National Advisory Committee</h1>;
      case 'Speakers':
        return <h1>Tentative List Of Speakers</h1>;
      case 'Contact':
        return <h1>Contact Us</h1>;
      default:
        return;
    }
  };

  return (
    <>
      <Navbar onTabClick={handleTabClick} />
      <section className="hero">
        <div className="hero-content">
          {renderContent()} { }
        </div>
      </section>
      {/* <section className='new'>
        <h3>Accepted Manuscripts shall be published in Scopus/SCI Indexed Journal</h3>
        <p>The Accepted manuscripts of the previous three versions of the conference have been published in the reputed journal “INSTITUTE OF PHYSICS (IoP)” and American Institute of Physics (AIP) as “CONFERENCE PROCEEDINGS”.    </p>
      </section> */}
    </>
  );
};

export default HeroSection;
