import React from 'react';
import './About.css';
import '../App.css';
export default function About() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="vibes display-2">About Our Trip</p>
            <p className="montserrat">We are going on a Luxury Canal Cruise booked through French Country Waterways, Ltd.</p>

            <p className="vibes display-5">Adrienne Itinerary</p>
            <p className="montserrat">Saint-Leger-Sur-Dheune to Saint-Jean-De-Losne</p>
            <p className="montserrat">Meeting Point: Hotel Raphael, Paris</p>
            <p className="montserrat">Meeting Time: Sunday, October 29, 2023 1:45PM</p>
            <p className="montserrat">We will be staying on a barge named Adrienne. Adrienne will travelling throught the Burgandy Region of France.</p>
            <p className="montserrat">The Vineyards of Burgandy produce some of the world's most prized wines. More about this will be revealed on the actual trip in our dinner blog</p>
        </div>
    )
}