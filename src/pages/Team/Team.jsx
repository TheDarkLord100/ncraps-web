import React from 'react';
import './Team.css';
import HeroSection from '../HeroPage/HeroPage';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const teamData = {
    "Chief Patrons": {
        "Shri Anuj Aggarwal": {
            "designation": "President, DIT University"
        },
        "Shri N. Ravi Shanker": {
            "designation": "Chancellor, DIT University"
        }
    },
    "Patrons": {
        "Prof. G. Raghurama": {
            "designation": "Vice-Chancellor, DIT University"
        },
        "Prof. B V Ramana Reddy": {
            "designation": "I/C Director, NIT Uttarakhand"
        }
    },
    "Chairpersons": {
        "Prof. Naresh M Chadha": {
            "designation": "Dean SOPS, DIT University"
        },
        "Prof. Dharmendra Tripathi": {
            "designation": "NIT Uttarakhand"
        }
    },
    "Academic Advisory Committee": {
        "Prof. Debashish Chowdhury": {
            "designation": "SOPS, DIT University"
        },
        "Prof. Rakesh Mohan": {
            "designation": "SOPS, DIT University"
        },
        "Prof. Manoj Bhatnagar": {
            "designation": "SOPS, DIT University"
        },
        "Prof. Naveen Singhal": {
            "designation": "SOPS, DIT University"
        },
        "Prof. Surbhi Sachdev": {
            "designation": "SOPS, DIT University"
        }
    },
    "Conveners": {
        "Dr. Jogendra Kumar": {
            "designation": "SOPS, DIT University"
        },
        "Dr. Jagrati Sahariya": {
            "designation": "NIT Uttarakhand"
        }
    },
    "Organizing Secretaries": {
        "Dr. Parveen Kumar": {
            "designation": "SOPS, DIT University"
        },
        "Dr. Rakesh Kumar Mishra": {
            "designation": "NIT Uttarakhand"
        },
        "Dr. Kusum Sharma": {
            "designation": "NIT Uttarakhand"
        }
    },
    "Joint Secretaries": {
        "Dr. Pooja S. Saxena": {
            "designation": "SOPS, DIT University"
        },
        "Dr. Ravi Shukla": {
            "designation": "SOPS, DIT University"
        },
        "Dr. Manisha Duseja": {
            "designation": "SOPS, DIT University"
        }
    },
    "Website Development": {
        "Rudraksh Gupta": {
            "designation": "3rd Year B.Tech CSE",
            "affiliation": "DIT University"
        }
    }
}

function Team() {
    return (
        <>
            <Navbar />
            <section className="team">
                <h1>Organizing Committee</h1>
                <div className="main-cnt">
                    {Object.entries(teamData).map(([section, members]) => (
                        <div className="team-sections" key={section}>
                            <h3>{section}</h3>
                            <table className="team-table">
                                <tbody>
                                    {Object.entries(members).map(([name, details]) => (
                                        <>
                                            <div className="mobile-view">
                                                <tr key={name}>
                                                    <td className="name">{name}</td>
                                                </tr>
                                                <tr>
                                                    <td className="designation">{details.designation}</td>
                                                </tr>
                                            </div>
                                                <tr key={name} className="desktop-view">
                                                    <td className="name">{name}</td>
                                                    <td className="designation">{details.designation}</td>
                                                </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}


export default Team;
