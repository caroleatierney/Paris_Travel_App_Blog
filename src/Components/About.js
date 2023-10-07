import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './About.css';

export default function About() {
    return (
        <div>
            <img
                className="d-block w-100"
                src="https://imgur.com/NpmvFm6.png"
                alt="BasicTripImage"
            /> 

            <h1>About Our Trip</h1>
            <h2>We are going on a Luxury Canal Cruise booked through French Country Waterways, Ltd.</h2>

            <h1>ADRIENNE ITINERARY</h1>
            <h2>SAINT-LEGER-SUR-DHEUNE to SAINT-JEAN-DE-LOSNE</h2>
            <h3>Meeting Point: Hotel Raphael, Paris</h3>
            <h3>Meeting Time: Sunday, October 29, 2023 1:45PM</h3>
            <p>We will be staying on a barge named Adrienne. Adrienne will travelling throught the Burgandy Region of France. The Vineyards of Burgandy produce some of the world's most prized wines. More about this will be revealed on the actual trip in our dinner blog</p>
        </div>
    )
}