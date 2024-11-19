import React from 'react';
import './Team.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Team() {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <section className="team">
        <h1>Organizing Committee</h1>
        <div className="main-cnt">
          <div className="conatiner">
            <div className="team-sections">
              <h3>Chief Patrons</h3>
              <ul>
                <div className="inner-section">
                  <li>Shri Anuj Aggarwal </li>
                  <p className="dit">Chairman, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Shri N. Ravi Shanker</li>
                  <p className="dit"> Chancellor, DIT University</p>
                </div>
              </ul>
            </div>

            <div className="team-sections">
              <h3>Patrons</h3>
              <ul>
                <div className="inner-section">
                  <li>Prof. G. Raghurama </li>
                  <p className="dit">Vice-Chancellor, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Prof. B V Ramana Reddy </li>
                  <p className="dit">I/C Director, NIT Uttarakhand</p>
                </div>
              </ul>
            </div>

            <div className="team-sections">
              <h3>Chairperson(s)</h3>
              <ul>
                <div className="inner-section">
                  <li>Prof. Naresh M Chadha Dean </li>
                  <p className="dit"> Dean SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Prof. Dharmendra Tripathi </li>
                  <p className="dit">NIT Uttarakhand</p>
                </div>
              </ul>
            </div>

            <div className="team-sections">
              <h3>Academic Advisory Committee</h3>
              <ul>
                <div className="inner-section">
                  <li>Prof. Debashish Chowdhury </li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Prof. Rakesh Mohan</li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Prof. Manoj Bhatnagar </li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Prof. Naveen singhal</li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Prof. Surbhi Sachdev</li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="container second">
            <div className="team-sections">
              <h3>Convener(s)</h3>
              <ul>
                <div className="inner-section">
                  <li>Dr. Jogendra Kumar</li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Dr. Jagrati Sahariya </li>
                  <p className="dit">NIT Uttarakhand</p>
                </div>
              </ul>
            </div>

            <div className="team-sections">
              <h3>Organizing Secretary(s)</h3>
              <ul>
                <div className="inner-section">
                  <li>Dr. Parveen Kumar</li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Dr. Rakesh Kumar Mishra </li>
                  <p className="dit">NIT Uttarakhand</p>
                </div>
                <div className="inner-section">
                  <li>Dr. Kusum Sharma </li>
                  <p className="dit">NIT Uttarakhand</p>
                </div>
              </ul>
            </div>

            <div className="team-sections">
              <h3>Joint Secretaries</h3>
              <ul>
                <div className="inner-section">
                  <li>Dr. Pooja S. Saxena</li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Dr. Ravi Shukla </li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
                <div className="inner-section">
                  <li>Dr. Manisha Duseja</li>
                  <p className="dit">SOPS, DIT University</p>
                </div>
              </ul>
            </div>

            <div className="team-sections">
              <h3>Website Development</h3>
              <ul>
                <div className="inner-section">
                  <li>Rudraksh Gupta (3rd Year B.Tech CSE), </li>
                  <p className="dit">DIT University</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Team;
