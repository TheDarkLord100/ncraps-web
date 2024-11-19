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
        <p>Paper Submission Start : October 25, 2024</p>
        <p>Last date for Paper Submission : January 15, 2025</p>
        <p>Notification for Acceptance of paper : January 30, 2025</p>
        <p>Last date for Online Registration : January 25, 2025</p>
        <p>Last date for Accommodation Requests : January 30, 2025</p>
        <p>Conference Date : Febrauary 14-15, 2025</p>
      </ul>
    </section>
    <Footer />
  </>
);

export default Dates;
