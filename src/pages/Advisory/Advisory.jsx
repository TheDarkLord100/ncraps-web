import Footer from '../../components/Footer/Footer';
import HeroSection from '../HeroPage/HeroPage';
import './Advisory.css';
import Navbar from '../../components/Navbar/Navbar';

function Advisory() {
  const advisoryMembers = [
    'Prof. K. K. Raina, M. S. Ramaiah University, Bengaluru',
    'Prof. Chandra Prakash, Solid State Physical Laboratory, Delhi',
    'Prof. B. L. Ahuja, Bodoland University, Assam',
    'Prof. Manish Kashyap, JNU, Delhi',
    'Prof. P. G. Siddheshwar, CHRIST University, Bangalore',
    'Prof. R. J. Choudhary, UGC-DAE-CSR, Indore',
    'Prof. N. L. Heda, University of Kota, Rajasthan',
    'Prof. Rajesh Punia, M. D. University, Rohtak',
    'Prof. Sevi Murugavel, University of Delhi, New Delhi',
    'Prof. Ramesh Chandra, IIT Roorkee, Roorkee',
    'Prof. Suman Chakraborty, IIT Kharagpur',
    'Prof. Tanmay Basak, IIT Madras',
    'Prof. Pranav Mondal, IIT Guwahati',
    'Prof. Dinesh Aswal, NPL, Delhi',
    'Prof. Sunil Kumar Khare, IISER, Kolkata',
    'Prof. Thallada Bhaskar, CSIR-IIP, Dehradun',
    'Prof. A. Ajayaghosh, SRMIST, Chennai',
    'Prof. Satish K. Awasthi, University of Delhi, New Delhi',
    'Prof. M. R. Maurya, IIT Roorkee, Roorkee',
    'Prof. G. P. Raja Sekhar, IIT Kharagpur, Kharagpur',
    'Prof. B.S. Bhadauria, BBAU, Lucknow',
    'Prof. Sandeep Banerjee, IIT Roorkee, Roorkee',
    'Prof. Rajesh Kumar Pandey, IIT-BHU, Varanasi',
    'Prof. Om Prakash, GBPUAT, Pantnagar',
    'Prof. S.K Pandey, Banaras Hindu University, Varanasi',
    'Prof. U. P. Singh, IIT, Roorkee',
    'Prof. Amjad Ali, Thapar University, Patiala',
    'Prof. M. K. Singh, IIT(ISM), Dhanbad',
    'Prof. Vineet Kumar Singh, IIT-BHU, Varanasi',
    'Prof. Rushi Kumar B, VIT, Vellore',
    'Prof. A.K. Lal, Thapar University, Punjab',
    'Prof. Pankaj Mishra, Glocal University, U.P.',
    'Prof. Mithilesh Singh, V. B. S. University, Jaunpur',
    'Dr. Avneesh Chaturvedi, University of Allahabad, Prayagraj',
    'Dr. Triloki Nath, D. D. U. Gorakhpur University, Gorakhpur',
    'Dr. Pratima Rai, University of Delhi, New Delhi',
    'Dr. R.K. Pandey, Dr. Harisingh Gour Vishwavidyalaya, Sagar',
    'Dr. Anupam Priyadarshi, Banaras Hindu University, Varanasi',
    'Dr. Ratnesh Kumar Mishra, NIT Jamshedpur',
    'Dr. Amit Singh, REC, Ambedkar Nagar, U.P.',
    'Dr. Pankaj Kumar Mishra, C.U.S.B., Gaya',
    'Dr. Punam Gupta, Devi Ahilya Vishwavidyalaya, Indore',
    'Dr. Dilip Kumar Jaiswal, SRMU, Lucknow',
    'Dr. Kishore Kumar, Manipal University, Jaipur',
  ];

  const half = Math.ceil(advisoryMembers.length / 2); // Split the array into two halves
  const firstHalf = advisoryMembers.slice(0, half);
  const secondHalf = advisoryMembers.slice(half);

  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <section className="advisory">
        <h1>National Advisory Committee</h1>
        <div className="advisory-container">
          <ul className="advisory-column">
            {advisoryMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
          {/* <ul className="advisory-column">
            {secondHalf.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Advisory;
