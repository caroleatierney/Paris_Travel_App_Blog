// this component displays us!!!
import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import '../App.css';
import './Home.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function Home() {
    return (
        <div>

            <h1 className="vibes pt-5" style={{ color: 'black', fontSize: '100px', textShadow: '1px 1px 1px #d97fb9f5' }}>Paris 2023, Here we come!</h1>

            <Container className="d-flex flex-column align-content-center">"
                <Col className="m-1">
                    <img src="https://i.imgur.com/GJ1z5XY.jpg" alt="Globe" />
                </Col>

                <Col>
                    <p className="montserrat fs-3">
                        Add Spinning Globe, plain and Paris marked?
                    </p>
                </Col>
            </Container>
        </div>
    )
}