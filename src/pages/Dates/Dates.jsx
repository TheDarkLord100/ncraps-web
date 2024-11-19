import React from 'react';
import './Dates.css';
// import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Dates = () => (
  <>
    <Navbar />
    {/* <HeroSection /> */}
    <section className="dates">
      <h1>Important Dates</h1>
      <ul>
        <p>Paper Submission Start : <span>October 25, 2024</span></p>
        <p>Last date for Paper Submission : <span>January 15, 2025</span></p>
        <p>Notification for Acceptance of paper :<span> January 30, 2025</span></p>
        <p>Last date for Online Registration : <span>January 25, 2025</span></p>
        <p>Last date for Accommodation Requests : <span>January 30, 2025</span></p>
        <p>Conference Date : <span>February 14-15, 2025</span></p>
      </ul>
    </section>
    <Footer />
  </>
);

export default Dates;
