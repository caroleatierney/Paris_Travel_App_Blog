// this component displays an image of the Mona Lisa and some information about it
import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../App.css';
import './MonaLisa.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function monaLisa() {
    return (
        <div>

            <h1 className="vibes pt-5" style={{ color: 'black', fontSize: '100px', textShadow: '1px 1px 1px #d97fb9f5' }}>The Mona Lisa</h1>

            <Container className="d-flex flex-column align-content-center">"
                {/* <Row> */}
                    <Col className="m-1">
                        <img src="https://i.imgur.com/pCZrlUb.jpg" alt="Mona Lisa" />
                    </Col>

                    <Col>
                        <p className="montserrat fs-3">
                            Lisa del Giocondo was an Italian noblewoman and member of the Gherardini family of Florence and Tuscany. Her name was given to the Mona Lisa, her portrait commissioned by her husband and painted by Leonardo da Vinci in the Italian Renaissance. The Mona Lisa is a portait of Lisa Giacondo, painted by Leonardo Da Vinci somewhere between 1503 and 1519. It was commissioned by her husband, Francesco di Bartolomeo del Giocondo. The painting is a half length portrait whose medium was oil on a poplar wood panel. It is the most famous portrait in the world due to the enigmatic smile on Lisa Giacondo and the mysteries that surrounded it. The painting was in Leonardo's posession at his death when he was in the court of King Fracis I. Upon his death, King Francis I acquired it. For centries it remained part of the roal collection. It had been hanging in Napolean's bedroom when it was claimed during the French Revolution (1787-1799). It has been displayed at the Louvre Museum in Paris since 1804. The painting was stolen in 1911 which made it even more famous. It didn't reappear for two years when someone tried selling it to an art dealer in Florence who alerted the authorities.
                        </p>
                    </Col>
                {/* </Row> */}
            </Container>

            <p className="montserrat fs-3 pt-5">The information on this page is from the following websites:</p>

            <ul>
                <li style={{ color: 'black', fontSize: '30px', textShadow: '1px 1px 1px #d97fb9f5' }} >
                    <a href="https://en.wikipedia.org/wiki/Mona_Lisa" target="_blank">Wikepedia</a></li>
                <li style={{ color: 'black', fontSize: '30px', textShadow: '1px 1px 1px #d97fb9f5' }} >
                    <a href="https://www.britannica.com/topic/Mona-Lisa-painting" target="_blank">Britannica</a></li>
            </ul>
        </div>
    )
}