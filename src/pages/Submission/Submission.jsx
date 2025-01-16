import React from 'react';
import './Submission.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import paperTemplate from '../../assets/NCRAPS25_paper_template.docx';
import brochure from '../../assets/bro_updated.pdf';
import template from '../../assets/abstract.docx';

const Submission = () => {
  const resources = [
    { name: 'Abstract Template', link: template },
    { name: 'Paper Template', link: paperTemplate },
    { name: 'Brochure', link: brochure },
  ];

  return (
    <div className="page-component">
      <Navbar />
      <section className="submission">
        <h1>Paper Submission</h1>
        <p className="instructions">
          Click on the links below to download the templates and brochure:
        </p>
        <ul>
          {resources.map((resource, index) => (
            <li key={index} className="resource-item">
              <a href={resource.link} download className="download-link">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="important">
          <span>**</span> The proposal is submitted to Springer for a possible publication in a Scopus Indexed Book series. 
          The decision will be based on the evaluation and screening reports of the submitted articles.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Submission;
