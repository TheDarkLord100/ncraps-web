import Footer from '../../components/Footer/Footer';
import './Advisory.css';
import Navbar from '../../components/Navbar/Navbar';

function Advisory() {
  const advisoryMembers = [
    { name: 'Prof. K. K. Raina', place: 'M. S. Ramaiah University, Bengaluru' },
    { name: 'Prof. Chandra Prakash', place: 'Solid State Physical Laboratory, Delhi' },
    { name: 'Prof. B. L. Ahuja', place: 'Bodoland University, Assam' },
    { name: 'Prof. Manish Kashyap', place: 'JNU, Delhi' },
    { name: 'Prof. P. G. Siddheshwar', place: 'CHRIST University, Bangalore' },
    { name: 'Prof. R. J. Choudhary', place: 'UGC-DAE-CSR, Indore' },
    { name: 'Prof. N. L. Heda', place: 'University of Kota, Rajasthan' },
    { name: 'Prof. Rajesh Punia', place: 'M. D. University, Rohtak' },
    { name: 'Prof. Sevi Murugavel', place: 'University of Delhi, New Delhi' },
    { name: 'Prof. Ramesh Chandra', place: 'IIT Roorkee, Roorkee' },
    { name: 'Prof. Suman Chakraborty', place: 'IIT Kharagpur' },
    { name: 'Prof. Tanmay Basak', place: 'IIT Madras' },
    { name: 'Prof. Pranav Mondal', place: 'IIT Guwahati' },
    { name: 'Prof. Dinesh Aswal', place: 'NPL, Delhi' },
    { name: 'Prof. Sunil Kumar Khare', place: 'IISER, Kolkata' },
    { name: 'Prof. Thallada Bhaskar', place: 'CSIR-IIP, Dehradun' },
    { name: 'Prof. A. Ajayaghosh', place: 'SRMIST, Chennai' },
    { name: 'Prof. Satish K. Awasthi', place: 'University of Delhi, New Delhi' },
    { name: 'Prof. M. R. Maurya', place: 'IIT Roorkee, Roorkee' },
    { name: 'Prof. G. P. Raja Sekhar', place: 'IIT Kharagpur, Kharagpur' },
    { name: 'Prof. B.S. Bhadauria', place: 'BBAU, Lucknow' },
    { name: 'Prof. Sandeep Banerjee', place: 'IIT Roorkee, Roorkee' },
    { name: 'Prof. Rajesh Kumar Pandey', place: 'IIT-BHU, Varanasi' },
    { name: 'Prof. Om Prakash', place: 'GBPUAT, Pantnagar' },
    { name: 'Prof. S.K Pandey', place: 'Banaras Hindu University, Varanasi' },
    { name: 'Prof. U. P. Singh', place: 'IIT, Roorkee' },
    { name: 'Prof. Amjad Ali', place: 'Thapar University, Patiala' },
    { name: 'Prof. M. K. Singh', place: 'IIT(ISM), Dhanbad' },
    { name: 'Prof. Vineet Kumar Singh', place: 'IIT-BHU, Varanasi' },
    { name: 'Prof. Rushi Kumar B', place: 'VIT, Vellore' },
    { name: 'Prof. A.K. Lal', place: 'Thapar University, Punjab' },
    { name: 'Prof. Pankaj Mishra', place: 'Glocal University, U.P.' },
    { name: 'Prof. Mithilesh Singh', place: 'V. B. S. University, Jaunpur' },
    { name: 'Dr. Avneesh Chaturvedi', place: 'University of Allahabad, Prayagraj' },
    { name: 'Dr. Triloki Nath', place: 'D. D. U. Gorakhpur University, Gorakhpur' },
    { name: 'Dr. Pratima Rai', place: 'University of Delhi, New Delhi' },
    { name: 'Dr. R.K. Pandey', place: 'Dr. Harisingh Gour Vishwavidyalaya, Sagar' },
    { name: 'Dr. Anupam Priyadarshi', place: 'Banaras Hindu University, Varanasi' },
    { name: 'Dr. Ratnesh Kumar Mishra', place: 'NIT Jamshedpur' },
    { name: 'Dr. Amit Singh', place: 'REC, Ambedkar Nagar, U.P.' },
    { name: 'Dr. Pankaj Kumar Mishra', place: 'C.U.S.B., Gaya' },
    { name: 'Dr. Punam Gupta', place: 'Devi Ahilya Vishwavidyalaya, Indore' },
    { name: 'Dr. Dilip Kumar Jaiswal', place: 'SRMU, Lucknow' },
    { name: 'Dr. Kishore Kumar', place: 'Manipal University, Jaipur' },
  ];

  return (
    <>
      <Navbar />
      <section className="advisory">
        <h1>National Advisory Committee</h1>
        <div className="advisory-container">
          {advisoryMembers.map((member, index) => (
            <div className="advisory-item" key={index}>
              <div className="advisory-name">{member.name}</div>
              <div className="advisory-place">{member.place}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Advisory;
