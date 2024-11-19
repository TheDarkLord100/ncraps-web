import React from 'react';
import './Speakers.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Speakers = () => {
  const speakers = [
    'Prof. Kamal K Kar, IIT Kanpur',
    'Prof. Sevi Murugavel, University of Delhi, Delhi',
    'Prof. Ramesh Chandra, IIT Roorkee',
    'Prof. K.K. Bamzai, University of Jammu, Kashmir',
    'Prof. Rajesh Punia, M.D. University, Rohtak',
    'Prof. Puneet Sharma, IILM University, Greater Noida',
    'Prof. P. G. Siddheshwar, CHRIST University, Bangalore',
    'Prof. G. P. Raja Sekhara, IIT Kharagpur, Kharagpur',
    'Prof. PVSN Murthy, IIT Kharagpur, Kharagpur',
    'Prof. B.S. Bhadauria, BBAU, Lucknow',
    'Prof. Sandeep Banerjee, IIT Roorkee',
    'Prof. Ameeya K Nayak, IIT Roorkee',
    'Prof. Sandeep Banerjee, IIT Roorkee',
    'Prof. Rajesh Kumar Pandey, IIT-BHU, Varanasi',
    'Prof. Vineet Kumar Singh, IIT-BHU, Varanasi',
    'Prof. Rajiv Kumar, IIT-BHU, Varanasi',
    'Prof. U. P. Singh, IIT, Roorkee',
    'Prof. Om Prakash, GBPUAT, Pantnagar',
    'Prof. Shailey Singhal, UPES, Dehradun',
    'Prof. S.K. Pandey, Banaras Hindu University, Varanasi',
    'Prof. Amjad Ali, Thapar University, Patiala',
    'Dr. Vineet Kumar, FRI (Deemed to be) University, Dehradun',
    'Dr. Raj Kumar, Indian Institute of Petroleum, Dehradun',
    'Dr. Sivaraj R, NIT Jalandhar',
    'Dr. Subash Chandra Martha, IIT Ropar',
    'Dr. Ashok Kumar, H.N.B. Garhwal University, Srinagar',
    'Dr. Sajjan Dahiya, M.D. University, Rohtak',
    'Dr. Avneesh Chaturvedi, University of Allahabad, Prayagraj',
    'Dr. Triloki Nath, D.D.U. Gorakhpur University, Gorakhpur',
    'Dr. Punam Gupta, Devi Ahilya Vishwavidyalaya, Indore',
    'Dr. Pratima Rai, University of Delhi, Delhi',
    'Dr. Pankaj Kumar Mishra, CUSB, Gaya',
    'Dr. Haredra Singh, P.G. College, Gazipur, U.P.',
    'Dr. Ratnesh Kumar Mishra, NIT Jamshedpur',
    'Dr. Amit Singh, REC, Ambedkar Nagar, U.P.',
  ];

  const half = Math.ceil(speakers.length / 2);
  const firstHalf = speakers.slice(0, half);
  const secondHalf = speakers.slice(half);

  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <section className="speakers">
        <h1>Tentative Speakers</h1>
        <div className="speakers-container">
          <ul className="speakers-column">
            {firstHalf.map((speaker, index) => (
              <li key={index}>{speaker}</li>
            ))}
          </ul>
          <ul className="speakers-column">
            {secondHalf.map((speaker, index) => (
              <li key={index}>{speaker}</li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Speakers;
