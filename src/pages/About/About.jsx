import React from 'react';
import './About.css';// Replace with your brochure's file path
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const About = () => (
  <>
    <Navbar />
    <section className="about-page">
      <div className="tabs">
        <h1>About The Conference</h1>
        <h2>About NCRAPS-2025</h2>
        <p>
          The National Conference on “Recent Advancement in Physical Sciences
          (NCRAPS-2025)” will be held offline. This conference is the 6th
          edition of an NCRAPS series started in 2019. The vision behind
          organizing this conference is to provide an excellent forum for
          researchers, scientists, and industry persons from interdisciplinary
          areas to showcase their current contributions in the recent area of
          Physical Sciences. The objectives of NCRAPS-2025 are to abreast the
          young minds from Institutes, Universities, Colleges, and Industries
          across the country, with the latest advancements in the field of this
          area, and to provide them an opportunity to share their recent
          research and views in various fields of Physical Sciences and their
          applications for the ultimate benefit of the Society and Industry. The
          broad aim of the conference is to groom young scientists to face
          future challenges for effective and efficient professional
          responsibilities. The conference will cover a wide range of topics in
          the form of plenary speakers, keynote speakers, invited talks &
          contributory papers/poster presentations.
        </p>

        <h2>Scope of Conference</h2>
        <ul className="conference-topics">
          <li className="list">Biophysics and Biomaterials</li>
          <li className="list">
            Computational Materials Science, Computational Physics
          </li>
          <li className="list">Electronic, Transport and Optical Properties</li>
          <li className="list">
            Materials for Energy and Societal Applications
          </li>
          <li className="list">Nanotechnology & Materials Science</li>
          <li className="list">Renewable Energy</li>
          <li className="list">Fluid Mechanics & Biomechanics</li>
          <li className="list">
            Computational Fluid Dynamics, Mathematical Modelling
          </li>
          <li className="list">
            Applied Mathematics & Analysis, Numerical Analysis
          </li>
          <li className="list">Algebra, Measure Theory, Topology</li>
          <li className="list">Differential Equations (ODEs & PDEs)</li>
          <li className="list">Smart and Advanced Materials</li>
          <li className="list">
            Computational Chemistry and Molecular Simulation
          </li>
          <li className="list">
            Atmospheric Science, Weather Prediction, Climate Change
          </li>
        </ul>

        <h2>About School of Physical Sciences, DIT University</h2>
        <p>
          School of Physical Sciences was established in 2013 under the aegis of
          DIT University with a vision to be an epicenter of learning, teaching,
          and research for Mathematics, Physical and Chemical Sciences. The
          department offers BSc (H), MSc, and PhD Programs in Physics, Chemistry
          and Mathematics. The curricula for all the courses are designed in
          consultation with experts from industry and academia to match the
          highest standards of the best institutes across the globe. We foster
          our students with a strong foundation.
        </p>

        <h2>About DIT University</h2>
        <p>Established in 1998 by Late Shri Naveen Agarwal, DIT University in Dehradun, 
          Uttarakhand, has grown into a leading institution recognized for its 
          vision “Imagine Aspire Achieve.” Spread across 21 acres, it offers 
          world-class infrastructure and a diverse range of programs in engineering, 
          sciences, humanities, and more. With a focus on innovation, research, and 
          a global outlook, DIT University empowers students with the skills to excel 
          in their careers and make a meaningful impact on society.
        </p>

        <h2>About NIT Uttarakhand</h2>
        <p>
          National Institute of Technology Uttarakhand is among the 10 newly
          established NITs, located in the hilly terrain of Srinagar (Garhwal)
          on the bank of the Alaknanda River. NIT Uttarakhand was established in
          2009 under the Act of Parliament of India by the Ministry of Human
          Resource Development and designated with the status of “Institute of
          National Importance”. NIT Uttarakhand is functional at Seed Campus,
          Srinagar, Pauri Garhwal, Uttarakhand. The institute has made rapid
          growth in recent years in terms of starting new academic programs,
          revision of academic curriculum, and development of laboratories and
          infrastructure.
        </p>

        <h2>About MRSI Delhi Chapter</h2>
        <p>
          The Market Research Society of India (MRSI) is a not-for-profit market
          research organization that has a chapter in Delhi. MRSI was founded in
          1988 by a group of research users and suppliers across India. The
          organization offers several benefits to its members, including Access
          to the largest body of MR professionals in India, Industry updates,
          Webinar recordings, and Annual market research seminars.
        </p>
      </div>
    </section>
    <Footer />
  </>
);

export default About;
