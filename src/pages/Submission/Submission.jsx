import React from 'react';
import './Submission.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import paperTemplate from '../../assets/NCRAPS25_paper_template.docx';
import brochure from '../../assets/Brochure.pdf';
import template from '../../assets/Abstract_template.docx';
import Navbar from '../../components/Navbar/Navbar';

function Submission() {
  return (
    <>
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
              Abstract/Template
            </a>
          </li>
          <li>
            {' '}
            <a href={paperTemplate} download className="download-link">
              Abstract/Paper Template
            </a>
          </li>
          <li>
            <a href={brochure} download className="download-link">
              Brochure
            </a>
          </li>
        </ul>
        <p className="important">
          <span>**</span>The selected papers will be published in
          SCOPUS/SCI/SCIE Indexed Journal/Conference Proceedings.
        </p>
        <p className="important">The same will be updated soon.</p>
      </section>
      <Footer />
    </>
  );
}

export default Submission;
