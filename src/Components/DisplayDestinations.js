import { useEffect, useState } from 'react'
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
            <ul>
                {destinations.map((destination, index) => (
                    <div key={index}>
                        <h1>{destination.id}</h1>
                        <h5>{destination.title}</h5>
                        <h5>{destination.houseNumber}</h5>
                        <h5>{destination.street}</h5>
                        <h5>{destination.city}</h5>
                        <h5>{destination.state}</h5>
                        <h5>{destination.postalCode}</h5>
                        <h5>{destination.country}</h5>
                        <h5>{destination.phone}</h5>
                        <h5>{destination.category}</h5>
                        <h5>{destination.notes || 'No notes: Select Update Notes Button to Add a Note'}</h5>
                        <h5>{destination.rating}</h5>
                        <UpdateDestinationNotes destinationId={destination.id} getDestinations={getDestinations} onUpdate={onUpdate} />
                        <DeleteDestination destinationId={destination.id} getDestinations={getDestinations} onDelete={onDelete} />
                        <hr></hr>
                    </div>
                ))}
            </ul>
        </div>
    )
}