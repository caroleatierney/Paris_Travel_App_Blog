import { useEffect, useState } from 'react'
import './DisplayDestination.css';
import RatingStars from './RatingStars';
import ReviewList from './ReviewList';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddDestination from './AddDestination.js'
import UpdateDestinationNotes from './UpdateDestinationNotes.js'
import DeleteDestination from './DeleteDestination.js'

import '../App.css';

export default function DisplayDestinations() {
    const [destinations, setDestinations] = useState([]);
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // get all data from MockAPI
    const getDestinations = async () => {
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setDestinations(data);
    };

    // execute function to get the destinations
    useEffect(() => {
        getDestinations();
    }, []);

    // this passes the destination id to the updateNotes component so it can update the correct destination's notes
    // reload new data
    const onUpdate = async (destinationId) => {
        UpdateDestinationNotes(destinationId);
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setDestinations(data);
    };

    // this passes the destination id to the delete component so it can delete the correct destination
    // reload new data
    const onDelete = async (destinationId) => {
        DeleteDestination(destinationId);
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setDestinations(data);
    };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // display data from MockAPI
    return (
        <div className="DisplayDestination p-5 m-5 bg-secondary" style={{ minHeight: '100%' }} >
            <AddDestination getDestinations={getDestinations} />

            <Container className="m-10 p-5">
                <Row>
                    {destinations.map((destination, index) => (
                        <Col key={index} xs={4} className="d-inline-flex flex-row justify-content-around text-white p-5">
                            <Card id="card" className="p-3 mb-2 text-center" style={{ width: '20rem', height: '40rem'}}>
                                <Card.Body>
                                    <Card.Title className="vibes fs-2">{destination.title}</Card.Title>
                                    <Card.Text className="p-3 mb-2 fs-6 text-center montserrat">
                                        {destination.houseNumber} {destination.street}<br></br>
                                        {destination.city}, {destination.state} {destination.postalCode}<br></br>
                                        {destination.country}<br></br>
                                    
                                        Phone: {destination.phone}<br></br><br></br>

                                        Category: {destination.category}<br></br><br></br>
                                        Notes: {destination.notes || 'No notes: Select Update Notes Button to Add a Note'}<br></br><br></br>
                                        {/* Reviews: {destination.reviews}<br></br><br></br> */}
                                        {/* Rating: {destination.rating}<br></br><br></br> */}
                                    </Card.Text>
                                    <ReviewList destination={destination.reviews}/>
                                    <RatingStars />
                                    <UpdateDestinationNotes destinationId={destination.id} getDestinations={getDestinations} onUpdate={onUpdate} />
                                    <DeleteDestination destinationId={destination.id} getDestinations={getDestinations} onDelete={onDelete} />
                                </Card.Body>
                        </Card>

                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}