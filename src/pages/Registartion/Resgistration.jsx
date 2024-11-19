import React from 'react';
import './Registration.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Registration() {
  const registrationData = [
    {
      category: 'Registration fee for participation',
      amount: '',
      isHeader: true,
    },
    { category: 'Research Scholar', amount: '2500.00' },
    { category: 'Faculty/Scientist', amount: '3000.00' },
    { category: 'Industry Personal', amount: '3500.00' },
    {
      category: 'Registration fee with publication',
      amount: '',
      isHeader: true,
    },
    { category: 'Research Scholar', amount: '5500.00' },
    { category: 'Faculty/Scientist/Industry Personal', amount: '7500.00' },
  ];

  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <section className="registration">
        <h1>Registration</h1>
        <p>
          At least one author of all accepted papers must register for the
          conference to ensure that the paper is included in the proceeding.
          Only registered authors are allowed to present their
          papers. Participants can be registered through the following link
          after payment of the mandatory registration fee:
        </p>
        <h3>
          LINK FOR REGISTRATION:{' '}
          <a
            href="https://bit.ly/NCRAPS25"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
        </h3>
        <table className="registration-table">
          <thead>
            <tr>
              <th>Category of Delegates</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {registrationData.map((row, index) => (
              <tr
                key={index}
                className={row.isHeader ? 'section-header' : `row-${index}`}
              >
                <td>{row.category}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="bank-details-table">
          <thead>
            <tr>
              <th colSpan="2">BANK DETAILS:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account Name</td>
              <td>DITU-Conferences A/C</td>
            </tr>
            <tr>
              <td>Name of the Bank</td>
              <td>Axis Bank</td>
            </tr>
            <tr>
              <td>Bank A/c Number</td>
              <td>921010054446130</td>
            </tr>
            <tr>
              <td>Bank Address</td>
              <td>Rajpur Road, Dehradun</td>
            </tr>
            <tr>
              <td>IFSC Code</td>
              <td>UTIB0000093</td>
            </tr>
            <tr>
              <td>Account Type</td>
              <td>Saving Account</td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
}

export default Registration;
