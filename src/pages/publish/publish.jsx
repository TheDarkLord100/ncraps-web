import React from 'react';
import './publish.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Poster from '../../assets/publish_poster.png';

const Publish = () => (
  <div className='publish-page'>
    <Navbar />
    <section>
      <div className="blank"></div>
      <div className="publish-content">
        <h1>RIMNI SPECIAL ISSUE</h1>
        <h2>Numerical Methods and Computational Simulations in Physical Sciences: Advances and Challenges</h2>
        <h3>Guidelines for Special Issue (SCIE, SCOPUS) Article Submission – NCRAPS 2025</h3>
        <ul className="guidelines">
          <li>
            <strong>Submission Portal:</strong> Submit your manuscript using the following link: &nbsp; 
            <u><a href="https://www.scipedia.com/sj/specialissuerimni9" target="_blank" rel="noopener noreferrer">
              Link
            </a></u>
          </li>
          <li><strong>Original Work:</strong> Manuscripts must be original, unpublished, and not under review elsewhere.</li>
          <li><strong>Scope Alignment:</strong> Articles must align with the themes of NCRAPS 2025 and the scope of the selected journal.</li>
          <li><strong>Template:</strong> Use the journal’s official manuscript template (Download from the journal website).</li>
          <li><strong>Length Limit:</strong> Manuscripts should follow the journal’s word/page limit (including figures, tables, and references).</li>
          <li><strong>Plagiarism Check:</strong> Ensure plagiarism is below 15%, including self-plagiarism.</li>
          <li><strong>Peer Review:</strong> All submissions will undergo standard peer review as per journal policies.</li>
          <li>
            <strong>APC Waiver:</strong>
            <ul>
              <li>Article Processing Charges (APC) may be waived from 30% to 100%, depending on the article's merit.</li>
              <li>Authors must first submit the article. After acceptance, they may request an APC waiver, which will be evaluated on a case-by-case basis.</li>
            </ul>
          </li>
          <li><strong>Deadline:</strong> Final submission must be made by <span className="deadline">01 September 2025</span>.</li>
        </ul>
      </div>
      <div className="blank">

      </div>
    </section>
    <Footer />
  </div>
);

export default Publish;
