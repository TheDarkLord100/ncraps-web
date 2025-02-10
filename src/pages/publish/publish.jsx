import React from 'react';
import './publish.css';// Replace with your brochure's file path
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Poster from '../../assets/publish_poster.png'

const Publish = () => (
  <>
    <Navbar />
    <section className="publish-page">
      <div className="tabs">
        <img src={Poster} alt="Poster" className="poster" />
      </div>
      {/* <p className="important">
           Please go through the link of the journal for special issue for more details. 
        </p>
        <div className="publish-lin">

        </div> */}
      {/* <div className="content">
        Please go through the link of the journal for special issue for more details. 
      </div> */}
    </section>
    <Footer />
  </>
);

export default Publish;
