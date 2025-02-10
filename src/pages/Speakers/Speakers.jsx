import React from 'react';
import './Speakers.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const speakers = [
  { name: 'Prof. (Dr) Thallada Bhaskar', place: 'Chief Scientist and Head, CSIR - Indian Institute of Petroleum, Dehradun, Uttarakhand', image: '/assets/speakers/Bhaskar.png' },
  { name: 'Prof. G. P. Raja Sekhara', place: 'IIT Kharagpur, Kharagpur', image: '/assets/speakers/RAJA.jpg' },
  { name: 'Prof. Rajneesh Bharadwaj', place: 'IIT Bombay, Mumbai', image: '/assets/speakers/RAJNEESH.jpg' },
  { name: 'Prof. P. G. Siddheshwar', place: 'CHRIST University, Bangalore', image: '/assets/speakers/PG.jpg' },
  { name: 'Prof. B. S. Bhadauria', place: 'Baba Bhimrao Ambedkar University, Lucknow', image: '/assets/speakers/Bhaduria.png' },
  { name: 'Prof. Sevi Murugavel', place: 'University of Delhi, Delhi', image: '/assets/speakers/Sevi.png' },
  // { name: 'Prof. Ramesh Chandra', place: 'IIT Roorkee', image: '/assets/speakers/Ramesh.png' },
  { name: 'Dr. Pradumn Kumar Pandey', place: 'IIT Roorkee', image: '/assets/speakers/pradumn.jpg' },
  { name: 'Prof. Rajesh Kumar Pandey', place: 'IIT-BHU, Varanasi', image: '/assets/speakers/RAJESH.jpg' },
  // { name: 'Prof. Vineet Kumar Singh', place: 'IIT-BHU, Varanasi', image: '/assets/speakers/VINEET.jpg' },
  // { name: 'Prof. Kamal K Kar', place: 'IIT Kanpur', image: '/assets/speakers/KAMAL.jpg' },
  { name: 'Prof. Anita Tomar', place: 'Sridev Suman Uttarakhand University, Rishikesh', image: '/assets/speakers/ANITA.png' },
  // { name: 'Dr. Punam Gupta', place: 'Devi Ahilya Vishwavidyalaya, Indore', image: '/assets/speakers/PUNAM.jpeg' },
  // { name: 'Dr. Triloki Nath', place: 'D.D.U. Gorakhpur University, Gorakhpur', image: '/assets/speakers/TRILOKI.jpeg' },
  { name: 'Dr. Jitendra Singh', place: 'Institute of Science, BHU', image: '/assets/speakers/JITENDRA.jpg' },
  { name: 'Dr. Surjeet Chahal', place: 'Chandigarh University, Mohali', image: '/assets/speakers/SURJEET.PNG' },
  { name: 'Dr. Jai Prakash Tripathi', place: 'Central University of Rajasthan, Ajmer', image: '/assets/speakers/JAI.jpg' },
  { name: 'Dr. Pratibha Tyagi', place: 'Parul Institute of Engineering and Technology, Vadodara', image: '/assets/speakers/PRATIBHA.jpg' },
  { name: 'Dr. Pratima Rai', place: 'University of Delhi, Delhi', image: '/assets/speakers/PRATIMA.jpg' },
  { name: 'Prof. K.K. Bamzai', place: 'University of Jammu, Kashmir', image: '/assets/speakers/Bamzai.png' },
  // { name: 'Prof. Rajesh Punia', place: 'M.D. University, Rohtak', image: '/assets/speakers/RajeshP.png' },
  // { name: 'Prof. Puneet Sharma', place: 'IILM University, Greater Noida', image: '/assets/speakers/Puneet.jpg' },
  { name: 'Prof. Shailey Singhal', place: 'UPES, Dehradun', image: '/assets/speakers/Shailey.webp' },
  { name: 'Dr. Avshish Kumar', place: 'Amity University, Uttar Pradesh', image: '/assets/speakers/Avshish.jpg' },
  { name: 'Dr. Meenakshi', place: 'Dept. of Physics, Baba Mastnath University, Rohtak, Haryana', image: '/assets/speakers/Meenakshi.jpg' },
  { name: 'Dr. Vijay Dangi', place: 'Baba Mastnath University, Rohtak, Haryana', image: '/assets/speakers/vijay.jpeg' },
  { name: 'Dr. Kalpana Sharma', place: 'Manipal University, Jaipur', image: '/assets/speakers/KALPANA.jpg' },
  // { name: 'Dr. Rajesh Kumar Pandey', place: 'IIT-BHU, Varanasi, U.P.', image: '/assets/speakers/RK.jpg' },
  { name: 'Dr. Lakshita Phor', place: 'Assistant Professor, Chandigarh University, Mohali, Punjab', image: '/assets/speakers/lakshita.jpg' },
  { name: 'Dr. Mithilesh Chaubey', place: 'International Institute of Information Technology, Naya Raipur', image: '/assets/speakers/mithilesh.jpg' },
  { name: 'Dr. R Sivaraj', place: 'Dr. B. R. Ambedkar National Institute of Technology, Jalandhar', image: '/assets/speakers/Siva.jpg' },
  { name: 'Dr. Sachin Kumar', place: 'University of Delhi, New Delhi', image: '/assets/speakers/sachin.jpg' },
  // { name: 'Dr. Ravi Kumar', place: 'National Institute of Technology, Kurukshetra', image: '/assets/speakers/Ravi.jpg' },
  { name: 'Dr. Amit Kumar Singh', place: 'Regional Engineering College, Ambedkar Nagar, U.P.', image: '/assets/speakers/amit.jpeg' },
  { name: 'Dr. Parveen Kumar', place: 'Baba Mastnath University, Rohtak, Haryana', image: '/assets/speakers/Parveen.jpg' },
  { name: 'Dr. Vivekanand', place: 'National Institute of Technology, Jaipur, Rajasthan', image: '/assets/speakers/vivekanand.jpg' },
  { name: 'Dr. Hariharan Muthusamy', place: 'National Institute of Technology, Srinagar, Uttarakhand', image: '/assets/speakers/hari.jpg' },
  { name: 'Dr. Praveen Kumar Gupta', place: 'National Institute of Technology, Silchar', image: '/assets/speakers/PKG.jpeg' },
  { name: 'Dr. Ravikant Avvari', place: 'National Institute of Technology, Rourkela', image: '/assets/speakers/RAVIKANT.jpg' },
  { name: 'Dr. Gautam Choubey', place: 'National Institute of Technology, Silchar, Assam', image: '/assets/speakers/Gautam.jpg' },
  { name: 'Dr. Yashashchandra Dwivedi', place: 'National Institute of Technology, Kurukshetra', image: '/assets/speakers/YASHASH.jpg' },
  // { name: 'Dr. Ashok Kumar', place: 'H.N.B. Garhwal University, Srinagar', image: '/assets/speakers/Ashok.jpg' },
  // { name: 'Dr. Sajjan Dahiya', place: 'M.D. University, Rohtak', image: '/assets/speakers/Sajjan.jpg' },
  // { name: 'Dr. Avneesh Chaturvedi', place: 'University of Allahabad, Prayagraj', image: '/assets/speakers/Avneesh.png' },
  { name: 'Dr. Vikas Chaurasiya', place: 'Sam Higginbottom University of Agriculture, Technology and Sciences, Prayagraj, U.P.', image: '/assets/speakers/vikas.jpg' },
  // { name: 'Dr. Pankaj Kumar Mishra', place: 'CUSB, Gaya', image: '/assets/speakers/Pankaj.jpg' },
  { name: 'Dr. Praveen Bhatt', place: 'Baba Mastnath University, Asthal Bhar, Rohtak', image: '/assets/speakers/parveenb.jpg' },
  // { name: 'Dr. Amit Singh', place: 'REC, Ambedkar Nagar, U.P.', image: '/assets/speakers/Amit.jpg' },
  { name: 'Dr. Ashok Kumar', place: 'Deenbandhu Chhotu Ram University of Science and Technology, Murthal, Haryana', image: '/assets/speakers/ashokk.jpg' },
  { name: 'Dr. Dhananjay Pandey', place: 'H.N.B. Garhwal University, Srinagar', image: '/assets/speakers/DHANANJAY.png' },
  { name: 'Dr. Ram Kishor Pandey', place: 'Dr. H. S. Gour University, Sagar', image: '/assets/speakers/RAM KISHOR.jpg' },
  { name: 'Prof. P. Danumjaya', place: 'BITS-PILANI, Goa Campus', image: '/assets/speakers/DANUMJAYA.jpg' },
  { name: 'Dr. E. P. Siva', place: 'SRM Institute of Science and Technology', image: '/assets/speakers/esive.JPG' },
  { name: 'Dr. Avanish Kumar Chaturvedi', place: 'University of Allahabad, Prayagraj, U.P.', image: '/assets/speakers/avanish.jpg' },
  // { name: 'Dr. Virendra Singh Chouhan', place: 'Manipal University, Jaipur, Rajasthan', image: '/assets/speakers/RK.jpg' },
  // { name: 'Prof. Vamsi Krishna Narla', place: 'GITAM University, Hyderabad', image: '/assets/speakers/VAMSI.webp' },
  { name: 'Dr. Dilip Kumar Jaiswal', place: 'Shri Ramswaroop Memorial University, Lucknow', image: '/assets/speakers/DILIP.jpg' },
  // { name: 'Prof. Mukesh Kumar Sharma', place: 'Guru Jambheshwar University of Science and Technology, Hisar', image: '/assets/speakers/MUKESH.jpg' },
  { name: 'Dr. Awadhesh Kumar Pandey', place: 'O.P. Jindal Global University, Sonipat', image: '/assets/speakers/AWADESH.jpg' },
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
