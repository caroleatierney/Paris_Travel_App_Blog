// Component used to display the about content

import React from 'react';
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function About() {
    return (
        <div className="blur about d-flex flex-column justify-content-center align-items-center my-5 ">
            <p className="vibes display-2">About Our Trip</p>
            <div>
                <p className="montserrat fs-1  my-5">We are going on a Luxury Canal Cruise booked through French Country Waterways, Ltd.</p>
                <p className="montserrat fs-2">We will be travelling from Saint-Leger-Sur-Dheune to Saint-Jean-De-Losne</p>
                <p className="montserrat fs-2">Adrienne is the name of the barge we will be travelling on. We will be exploring the Burgandy Region of France.</p>
                <p className="montserrat fs-2 my-5">The Vineyards of Burgandy produce some of the world's most prized wines. More about this will be revealed on the actual trip in our dinner blog</p>
            </div>
        </div>
    )
}