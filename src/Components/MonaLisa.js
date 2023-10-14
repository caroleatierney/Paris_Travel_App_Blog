// this component displays an image of the Mona Lisa and some information about it
import React from 'react'
import Container from 'react-bootstrap/Container';

import '../App.css';
import './MonaLisa.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function monaLisa() {
    return (
        <Container fluid className="d-flex flex-column align-content-center">

            <div>
                <img src="https://i.imgur.com/pCZrlUb.jpg" alt="Mona Lisa"></img>
            </div>

            <div>
                <p className="montserrat fs-3 p-3">Lisa del Giocondo was an Italian noblewoman and member of the Gherardini family of Florence and Tuscany. Her name was given to the Mona Lisa, her portrait commissioned by her husband and painted by Leonardo da Vinci in the Italian Renaissance.</p>
            </div>

            <div>
                <h3 className="montserrat fs-3 p-3">The Mona Lisa is a portrait of Giocondo painted by Leonardo da Vinci. It is on display at the Louvre in Paris, France.</h3>

                <h3 className="montserrat p-3">The Mona Lisa is considered to be a masterpiece of the Italian Renaissance. It has been described as "the best known, the most visited, the most written about, the most sung about art in the world".</h3>
            </div>

            <div>
                <p className="montserrat fs-3">The information on this page is from the following wikipedia: https://en.wikipedia.org/wiki/Mona_Lisa</p>
            </div>
        </Container>
    )
}