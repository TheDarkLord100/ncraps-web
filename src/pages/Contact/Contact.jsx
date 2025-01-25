import React from 'react';
import './Contact.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import jogendra from '../../assets/jaggu.webp';
import parveen from '../../assets/perv.webp';

const contacts = [
  { name: 'Dr. Jogendra Kumar', phone: '+91-7906546020', image: jogendra },
  { name: 'Dr. Parveen Kumar', phone: '+91-8650002221', image: parveen },
];

const Contact = () => (
  <>
    <Navbar />
    <section className="contact">
      <h1>Contact Us</h1>
      <div className="contacts-container">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-card">
            <img src={contact.image} alt="Contact" className="contact-img" />
            <li className="contact-name">{contact.name}</li>
            <p className="contact-phone">{contact.phone}</p>
          </div>
        ))}
      </div>
      <h3>
        Conference Email:&nbsp;&nbsp;
        <a href="mailto:dituconference@gmail.com" className="email-link">
          dituconference@gmail.com
        </a>
      </h3>
    </section>
    <Footer />
  </>
);

export default Contact;
