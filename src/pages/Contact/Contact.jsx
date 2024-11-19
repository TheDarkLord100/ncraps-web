import React from 'react';
import './Contact.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Contact = () => (
  <>
    <Navbar />
    {/* <HeroSection /> */}
    <section className="contact">
      <h1>Contact Us</h1>
      <ul>
        <div className="inner">
          <li>Dr. Jogendra Kumar</li>
          <p>+91-7906546020</p>
        </div>
        <div className="inner">
          <li>Dr. Praveen Kumar</li>
          <p>+91-9001119747</p>
        </div>
      </ul>
      <h3>
        Conference Email:
        <a href="mailto:dituconference@gmail.com" className="email-link">
          dituconference@gmail.com
        </a>
      </h3>
    </section>
    <Footer />
  </>
);

export default Contact;
