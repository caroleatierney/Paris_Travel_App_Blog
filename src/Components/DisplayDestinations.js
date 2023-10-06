import { useEffect, useState } from 'react'
import DeleteDestination from './DeleteDestination.js'
export default function DisplayDestinations() {
    const [destinations, setDestinations] = useState([]);
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'
    let count = 0

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // go out to the MockAPI, get all data
    // converts it to json and sets the state with set destinationData(data)
    // const getDestinations = () => {
    //     fetch(MOCK_API_URL)
    //     .then((data) => data.json())
    //     .then((data) => {
    //         setDestinations(data)
    //         console.log("destinations" + destinations)
    //     })
    // }

    const getDestinations = async () => {
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setDestinations(data);
    };

    // execute function to get the destinations
    useEffect(() => {
        getDestinations();
    }, []);


    // this passes the destination id to the delete component so it can delete the correct destination
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
                        <h5>{destination.name}</h5>
                        <h5>{destination.phone}</h5>
                        <DeleteDestination destinationId={destination.id} getDestinations={getDestinations} onDelete={onDelete} />
                        <hr></hr>
                    </div>
                ))}
            </ul>
        </div>
    )
}