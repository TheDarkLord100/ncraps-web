import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Places.css';
import placeData from './xxx.json'
import Footer from '../../components/Footer/Footer';

export default function PlacesToVisit() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(placeData);
  }, []);

  return (
    <div>
      <Navbar />
      <section className='places-section'>
        <h1>Guide to DIT University</h1>
        <iframe
          title="DIT"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=DIT%20University,Dehradun&zoom=10&maptype=roadmap"
        />
        <div className='transport-info'>
          <h2>How to Reach Dehradun</h2>
          <p>
            Visitors to DIT University can use various modes of transportation to reach Dehradun.
            The nearest airport is <strong>Jolly Grant Airport</strong>, located approximately 40 km away from the university.
            It offers regular domestic flights from major cities, making it a convenient option for air travel.
          </p>
          <p>
            For those traveling by train, the <strong>Dehradun Railway Station</strong> is about 15 km from the university.
            It is well-connected to other cities with multiple daily trains, including the Shatabdi Express and Jan Shatabdi.
          </p>
        </div>
        <div className='places-to-visit'>
          <h2>Places to Visit</h2>
          {places.map((locationData, index) => (
            <div key={index} className="places-to-visit">
              <h2>{locationData.location}</h2>
              {locationData.places.map((place, placeIndex) => (
                <div key={placeIndex} className="place">
                  <img src={place.image} alt={place.name} />
                  <div className="places-data">
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
