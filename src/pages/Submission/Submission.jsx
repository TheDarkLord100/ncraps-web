import React from 'react';
import './Submission.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import paperTemplate from '../../assets/NCRAPS25_paper_template.docx';
import brochure from '../../assets/bro.pdf';
import template from '../../assets/Abstract_template.docx';
import Navbar from '../../components/Navbar/Navbar';

function Submission() {
  return (
    <div className="page-component">
      <Navbar />
      {/* <HeroSection /> */}
      <section className="submission">
        <h1>Paper Submission </h1>

        <p className="rndm">
          Click on the given link to download the NCRAPS Paper Template: <br />
        </p>
        <ul>
          <li>
            <a href={template} download className="download-link">
              Abstract Template
            </a>
          </li>
          <li>
            {' '}
            <a href={paperTemplate} download className="download-link">
              Paper Template
            </a>
          </li>
          <li>
            <a href={brochure} download className="download-link">
              Brochure
            </a>
          </li>
        </ul>
        <p className="important">
          <span>**</span>The proposal is submitted to Springer for a possible publication in a Scopus Indexed Book series. 
          The proposal will be decided based on evaluation and screening reports of the submitted articles.
        </p>
        {/* <p className="important">The same will be updated soon.</p> */}
      </section>
      <Footer />
    </div>
  );
}

export default Submission;
