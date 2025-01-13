import React from 'react';
import './Speakers.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const speakers = [
  { name: 'Prof. Kamal K Kar', place: 'IIT Kanpur', image: '/assets/malsi.jpg' },
  { name: 'Prof. Sevi Murugavel', place: 'University of Delhi, Delhi', image: '/assets/malsi.jpg' },
  { name: 'Prof. Ramesh Chandra', place: 'IIT Roorkee', image: '/assets/malsi.jpg' },
  { name: 'Prof. K.K. Bamzai', place: 'University of Jammu, Kashmir', image: '/assets/malsi.jpg' },
  { name: 'Prof. Rajesh Punia', place: 'M.D. University, Rohtak', image: '/assets/malsi.jpg' },
  { name: 'Prof. Puneet Sharma', place: 'IILM University, Greater Noida', image: '/assets/malsi.jpg' },
  { name: 'Prof. P. G. Siddheshwar', place: 'CHRIST University, Bangalore', image: '/assets/malsi.jpg' },
  { name: 'Prof. G. P. Raja Sekhara', place: 'IIT Kharagpur, Kharagpur', image: '/assets/malsi.jpg' },
  { name: 'Prof. PVSN Murthy', place: 'IIT Kharagpur, Kharagpur', image: '/assets/malsi.jpg' },
  { name: 'Prof. B.S. Bhadauria', place: 'BBAU, Lucknow', image: '/assets/malsi.jpg' },
  { name: 'Prof. Sandeep Banerjee', place: 'IIT Roorkee', image: '/assets/malsi.jpg' },
  { name: 'Prof. Ameeya K Nayak', place: 'IIT Roorkee', image: '/assets/malsi.jpg' },
  { name: 'Prof. Rajesh Kumar Pandey', place: 'IIT-BHU, Varanasi', image: '/assets/malsi.jpg' },
  { name: 'Prof. Vineet Kumar Singh', place: 'IIT-BHU, Varanasi', image: '/assets/malsi.jpg' },
  { name: 'Prof. Rajiv Kumar', place: 'IIT-BHU, Varanasi', image: '/assets/malsi.jpg' },
  { name: 'Prof. U. P. Singh', place: 'IIT, Roorkee', image: '/assets/malsi.jpg' },
  { name: 'Prof. Om Prakash', place: 'GBPUAT, Pantnagar', image: '/assets/malsi.jpg' },
  { name: 'Prof. Shailey Singhal', place: 'UPES, Dehradun', image: '/assets/malsi.jpg' },
  { name: 'Prof. S.K. Pandey', place: 'Banaras Hindu University, Varanasi', image: '/assets/malsi.jpg' },
  { name: 'Prof. Amjad Ali', place: 'Thapar University, Patiala', image: '/assets/malsi.jpg' },
  { name: 'Dr. Vineet Kumar', place: 'FRI (Deemed to be) University, Dehradun', image: '/assets/malsi.jpg' },
  { name: 'Dr. Raj Kumar', place: 'Indian Institute of Petroleum, Dehradun', image: '/assets/malsi.jpg' },
  { name: 'Dr. Sivaraj R', place: 'NIT Jalandhar', image: '/assets/malsi.jpg' },
  { name: 'Dr. Subash Chandra Martha', place: 'IIT Ropar', image: '/assets/malsi.jpg' },
  { name: 'Dr. Ashok Kumar', place: 'H.N.B. Garhwal University, Srinagar', image: '/assets/malsi.jpg' },
  { name: 'Dr. Sajjan Dahiya', place: 'M.D. University, Rohtak', image: '/assets/malsi.jpg' },
  { name: 'Dr. Avneesh Chaturvedi', place: 'University of Allahabad, Prayagraj', image: '/assets/malsi.jpg' },
  { name: 'Dr. Triloki Nath', place: 'D.D.U. Gorakhpur University, Gorakhpur', image: '/assets/malsi.jpg' },
  { name: 'Dr. Punam Gupta', place: 'Devi Ahilya Vishwavidyalaya, Indore', image: '/assets/malsi.jpg' },
  { name: 'Dr. Pratima Rai', place: 'University of Delhi, Delhi', image: '/assets/malsi.jpg' },
  { name: 'Dr. Pankaj Kumar Mishra', place: 'CUSB, Gaya', image: '/assets/malsi.jpg' },
  { name: 'Dr. Haredra Singh', place: 'P.G. College, Gazipur, U.P.', image: '/assets/malsi.jpg' },
  { name: 'Dr. Ratnesh Kumar Mishra', place: 'NIT Jamshedpur', image: '/assets/malsi.jpg' },
  { name: 'Dr. Amit Singh', place: 'REC, Ambedkar Nagar, U.P.', image: '/assets/malsi.jpg' },
];

const Speakers = () => {
  return (
    <>
      <Navbar />
      <section className="speakers">
        <h1>Tentative Speakers</h1>
        <div className="speakers-container">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              <div className="speaker-details">
                <span className="speaker-name">{speaker.name}</span>
                <br />
                <span className="speaker-place">{speaker.place}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Speakers;
