import React from 'react';
import './Speakers.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const speakers = [
  { name: 'Prof. G. P. Raja Sekhara', place: 'IIT Kharagpur, Kharagpur', image: '/assets/speakers/RAJA.jpg' },
  { name: 'Prof. Rajneesh Bharadwaj', place: 'IIT Bombay, Mumbai', image: '/assets/speakers/RAJNEESH.jpg' },
  { name: 'Prof. P. G. Siddheshwar', place: 'CHRIST University, Bangalore', image: '/assets/speakers/PG.jpg' },
  { name: 'Prof. Rajesh Kumar Pandey', place: 'IIT-BHU, Varanasi', image: '/assets/speakers/RAJESH.jpg' },
  { name: 'Prof. Vineet Kumar Singh', place: 'IIT-BHU, Varanasi', image: '/assets/speakers/VINEET.jpg' },
  { name: 'Prof. Kamal K Kar', place: 'IIT Kanpur', image: '/assets/speakers/KAMAL.jpg' },

  { name: 'Prof. Anita Tomar', place: 'Sridev Suman Uttarakhand University, Rishikesh', image: '/assets/speakers/ANITA.png' },
  { name: 'Dr. Pratibha', place: 'Parul Institute of Engineering and Technology, Vadodara', image: '/assets/speakers/PRATIBHA.jpg' },
  { name: 'Dr. Punam Gupta', place: 'Devi Ahilya Vishwavidyalaya, Indore', image: '/assets/speakers/PUNAM.jpeg' },
  { name: 'Dr. Triloki Nath', place: 'D.D.U. Gorakhpur University, Gorakhpur', image: '/assets/speakers/TRILOKI.jpeg' },
  { name: 'Dr. Jitendra Singh', place: 'Institute of Science, BHU', image: '/assets/speakers/JITENDRA.jpg' },
  { name: 'Dr. Surjeet Chahal', place: 'Chandigarh University, Mohali', image: '/assets/speakers/SURJEET.PNG' },
  { name: 'Dr. Jai Prakash Tripathi', place: 'Central University of Rajasthan, Ajmer', image: '/assets/speakers/JAI.jpg' },
  { name: 'Dr. Pratima Rai', place: 'University of Delhi, Delhi', image: '/assets/speakers/PRATIMA.jpg' },
  
  { name: 'Prof. Sevi Murugavel', place: 'University of Delhi, Delhi', image: '/assets/speakers/Sevi.png' },
  { name: 'Prof. Ramesh Chandra', place: 'IIT Roorkee', image: '/assets/speakers/Ramesh.png' },
  { name: 'Prof. K.K. Bamzai', place: 'University of Jammu, Kashmir', image: '/assets/speakers/Bamzai.png' },
  { name: 'Prof. Rajesh Punia', place: 'M.D. University, Rohtak', image: '/assets/speakers/RajeshP.png' },
  { name: 'Prof. Puneet Sharma', place: 'IILM University, Greater Noida', image: '/assets/speakers/Puneet.jpg' },
  
  { name: 'Prof. PVSN Murthy', place: 'IIT Kharagpur, Kharagpur', image: '/assets/speakers/PVSN.png' },
  { name: 'Prof. B.S. Bhadauria', place: 'BBAU, Lucknow', image: '/assets/speakers/Bhaduria.png' },
  { name: 'Prof. Sandeep Banerjee', place: 'IIT Roorkee', image: '/assets/speakers/Sandeep.jpg' },
  { name: 'Prof. Ameeya K Nayak', place: 'IIT Roorkee', image: '/assets/speakers/Ameeya.jpg' },
  { name: 'Prof. Rajiv Kumar', place: 'IIT-BHU, Varanasi', image: '/assets/speakers/Rajiv.jpg' },
  { name: 'Prof. U. P. Singh', place: 'IIT, Roorkee', image: '/assets/speakers/UPS.jpg' },
  { name: 'Prof. Om Prakash', place: 'GBPUAT, Pantnagar', image: '/assets/speakers/OM.jpg' },
  { name: 'Prof. Shailey Singhal', place: 'UPES, Dehradun', image: '/assets/speakers/Shailey.webp' },
  { name: 'Prof. S.K. Pandey', place: 'Banaras Hindu University, Varanasi', image: '/assets/speakers/SK.jpeg' },
  { name: 'Prof. Amjad Ali', place: 'Thapar University, Patiala', image: '/assets/speakers/Amjad.png' },
  { name: 'Dr. Vineet Kumar', place: 'FRI (Deemed to be) University, Dehradun', image: '/assets/speakers/VineetKumar.jpg' },
  { name: 'Dr. Raj Kumar', place: 'Indian Institute of Petroleum, Dehradun', image: '/assets/speakers/Raj.png' },
  { name: 'Dr. Sivaraj R', place: 'NIT Jalandhar', image: '/assets/speakers/Siva.jpg' },
  { name: 'Dr. Subash Chandra Martha', place: 'IIT Ropar', image: '/assets/speakers/Subash.jpg' },
  { name: 'Dr. Ashok Kumar', place: 'H.N.B. Garhwal University, Srinagar', image: '/assets/speakers/Ashok.jpg' },
  { name: 'Dr. Sajjan Dahiya', place: 'M.D. University, Rohtak', image: '/assets/speakers/Sajjan.jpg' },
  { name: 'Dr. Avneesh Chaturvedi', place: 'University of Allahabad, Prayagraj', image: '/assets/speakers/Avneesh.png' },
  
  { name: 'Dr. Pankaj Kumar Mishra', place: 'CUSB, Gaya', image: '/assets/speakers/Pankaj.jpg' },
  { name: 'Dr. Haredra Singh', place: 'P.G. College, Gazipur, U.P.', image: '/assets/profile.jpg' },
  { name: 'Dr. Ratnesh Kumar Mishra', place: 'NIT Jamshedpur', image: '/assets/speakers/Ratnesh.jpg' },
  { name: 'Dr. Amit Singh', place: 'REC, Ambedkar Nagar, U.P.', image: '/assets/speakers/Amit.jpg' },
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
