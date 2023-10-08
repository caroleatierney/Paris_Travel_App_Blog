import { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddDestination from './AddDestination.js'
import UpdateDestinationNotes from './UpdateDestinationNotes.js'
import DeleteDestination from './DeleteDestination.js'

export default function DisplayDestinations() {
    const [destinations, setDestinations] = useState([]);
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // get all data from MockAPI
    const getDestinations = async () => {
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setDestinations(data);
        console.log("Destinations from fetch" + destinations);
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
        <div>
            <h1>Add a destination</h1>
            <AddDestination getDestinations={getDestinations} />
            <Row>
                <Card className="p-3 mb-2 bg-primary text-white text-center"  style={{ width: '18rem' }}>
                    {destinations.map((destination, index) => (
                        <Col key={index} xs={6}>
                            <Card.Body className="p-3 m-3">
                                <Card.Title>{destination.title}</Card.Title>
                                <Card.Text className="p-3 mb-2 bg-info text-white text-center">
                                    {destination.houseNumber} {destination.street}<br></br>
                                    {destination.city}, {destination.state} {destination.postalCode}<br></br>
                                    {destination.country}<br></br>
                                    Phone: {destination.phone}<br></br>

                                    Category: {destination.category}<br></br>
                                    Notes: {destination.notes || 'No notes: Select Update Notes Button to Add a Note'}<br></br>
                                    {destination.rating}<br></br>
                                </Card.Text>
                                <UpdateDestinationNotes destinationId={destination.id} getDestinations={getDestinations} onUpdate={onUpdate} />
                                <DeleteDestination destinationId={destination.id} getDestinations={getDestinations} onDelete={onDelete} />
                                <Button variant="secondary">Close</Button>
                            </Card.Body>
                        </Col>
                    ))}
                </Card>
            </Row>
        </div>
    )
}