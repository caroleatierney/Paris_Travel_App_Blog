import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Itinerary.css';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function Itinerary() {
    return (
        <Carousel className="d-flex p-3 mb-2 text-white" width={500} height={300} interval={2000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/KiDzz21.jpg"
                    alt="Saint_Léger_Sur_Dheune"
                />

                <Carousel.Caption className="carousel-content">
      
                    <h1 className="beige">Sunday, October 29, 2023</h1>

                    <h4 className="white">The ADRIENNE's guide will meet you at the hotel and escort the transfer from Paris via motorcoach, to Saint Léger-sur-Dheune where the ADRIENNE is moored. Champagne Reception and Welcome Dinner on board.</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/0B9HXi5.jpg"
                    alt="Château de Rully"
                />
                <Carousel.Caption className="carousel-content">
                    <h1 className="beige">Monday, October 30, 2023</h1>
                    <h4 className="white">Morning cruise to Chagny. Early afternoon visit of the Château de Rully. Family-owned and occupied since its beginning in the 12th century, the current owner is your host for a remarkable stroll through his family's history. Dinner ashore at the three-star Michelin restaurant, Lameloise.</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/UwfFNZx.jpg"
                    alt="Saône River"
                />
                <Carousel.Caption className="carousel-content">
                    <h1 className="beige">Tuesday, October 31, 2023</h1>
                    <h4 className="white">Morning cruise along the picturesque Canal du Centre and Saône River to the city of Chalon-sur-Saône. afternoon, drive to the well-known wine town of Chassagne Montrachet for a private cellar tour and wine tasting at a prominent local vintner.</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/UwfFNZx.jpg"
                    alt="Chalon-sur-Saône"
                />
                <Carousel.Caption className="carousel-content">
                    <h1 className="beige">Wednesday, November 1, 2023</h1>
                    <h4 className="white">Morning walking tour of Chalon-sur-Saône. Re turn to ADRIENNE for lunch on board. Beaune, the medieval wine capital of 15th century  Hospice and the historic to explore on your own. After lunch, drive to Burgundy. Visit the quarter, with free time to explore on your own.</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/mYs8kHQ.jpg"
                    alt="Clos de Vougeot"
                />
                <Carousel.Caption className="carousel-content">
                    <h1 className="beige">Thursday, November 2, 2023</h1>
                    <h4 className="white">Morning cruise to Seurre. Afternoon visit of the remarkable 12th-century museum château, the Clos de Vougeot, headquarters of the Chevaliers du Tastevin, whose special label is awarded annually to the finest Côte-d'Or wines.</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/ovDvvaq.jpg"
                    alt="Saint-Jean de-Losne"
                />
                <Carousel.Caption className="carousel-content">
                    <h1 className="beige">Friday, November 3, 2023</h1>
                    <h4 className="white">Morning cruise to the final mooring in Saint-Jean de-Losne. After lunch, enjoy a walking tour of Dijon, starting in front of the Ducal Palace, with time to browse in the fine specialty shops. Aperitifs and the Captain's Farewell Dinner on board.</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/31W7dVQ.jpg"
                    alt="Hot Air Balloons - Paris"
                />
                <Carousel.Caption className="carousel-content">
                    <h1 className="beige">Saturday, November 4, 2023</h1>
                    <h4 className="white">After breakfast, depart the barge for the escorted transfer to Paris, arriving at the hotel at approximately 12:45 PM. Note: The Captain will schedule Hot Air Ballooning during the cruise upon request. Balloon flights are dependent on favorable wind conditions and a minimum of four passengers.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    )
 }