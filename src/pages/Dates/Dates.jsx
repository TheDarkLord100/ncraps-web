import React from 'react';
import './Dates.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const importantDates = [
  { label: 'Abstract Submission Start', date: 'October 25, 2024' },
  { label: 'Last date for Abstract Submission', date: 'January 30, 2025' },
  { label: 'Notification for Acceptance of Abstract', date: 'January 30, 2025' },
  { label: 'Last date for Online Registration', date: 'January 30, 2025' },
  { label: 'Last date for Accommodation Requests', date: 'February 5, 2025' },
  { label: 'Conference Date', date: 'February 14-15, 2025' },
];

const Dates = () => (
  <div className="page-component">
    <Navbar />
    <section className="dates">
      <h1>Important Dates</h1>
      <ul>
        {importantDates.map((item, index) => (
          <li key={index} className="date-item">
            <p>
              {item.label}: <span>{item.date}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
    <Footer />
  </div>
);

export default Dates;
