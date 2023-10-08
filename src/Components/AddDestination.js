import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function AddDestinations({getDestinations}) {

    // API URL used to add to MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'

    // state add state variables and state update function used in add form and set to null
    const [newTitle, setNewTitle] = useState('')
    const [newHouseNumber, setNewHouseNumber] = useState('')
    const [newStreet, setNewStreet] = useState('')
    const [newCity, setNewCity] = useState('')
    const [newState, setNewState] = useState('')
    const [newPostalCode, setNewPostalCode] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [newNotes, setNewNotes] = useState('')
    const [newRating, setNewRating] = useState('')

    // react bootstrap modal variables   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // when add button is clicked, the new object is posted as a string to MockAPI
    function addDestination(e) {
        e.preventDefault()
        fetch(MOCK_API_URL, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: newTitle,
                houseNumber: newHouseNumber,
                street: newStreet,
                city: newCity,
                state: newState,
                postalCode: newPostalCode,
                country: newCountry,
                phone: newPhone,
                category: newCategory,
                notes: newNotes,
                rating: newRating
            }),
        }).then(() => getDestinations())

        // set form fields to blank after update
            setNewTitle('')
            setNewHouseNumber('')
            setNewStreet('')
            setNewCity('')
            setNewState('')
            setNewPostalCode('')
            setNewCountry('')
            setNewPhone('')
            setNewCategory('')
            setNewNotes('')
            setNewRating('')

        // close modal
        handleClose()
    }

    // react bootstrap modal used to only display form fields if user wants to add a dog
    return (
        <>
            <div className="text-center">
                <Button variant="primary" onClick={handleShow} >
                    Add a new destination!
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <div className="flex flex-row text-center">
                        <Modal.Title>Add a new destination!</Modal.Title>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form>
                        <label>Add New Destination Title</label>
                        <input className="m-1" onChange={(e) => setNewTitle(e.target.value)} value={newTitle}></input>

                        <label>Add New Destination House Number</label>
                        <input className="m-1" onChange={(e) => setNewHouseNumber(e.target.value)} value={newHouseNumber}></input>

                        <label>Add New Destination Street</label>
                        <input className="m-1" onChange={(e) => setNewStreet(e.target.value)} value={newStreet}></input>

                        <label>Add New Destination City</label>
                        <input className="m-1" onChange={(e) => setNewCity(e.target.value)} value={newCity}></input>

                        <label>Add New Destination State</label>
                        <input className="m-1" onChange={(e) => setNewState(e.target.value)} value={newState}></input>

                        <label>Add New Destination Postal Code</label>
                        <input className="m-1" onChange={(e) => setNewPostalCode(e.target.value)} value={newPostalCode}></input>

                        <label>Add New Destination Country</label>
                        <input className="m-1" onChange={(e) => setNewCountry(e.target.value)} value={newCountry}></input>

                        <label>Add New Destination Phone</label>
                        <input className="m-1" onChange={(e) => setNewPhone(e.target.value)} value={newPhone}></input>

                        <label>Add New Destination Category</label>
                        <input className="m-1" onChange={(e) => setNewCategory(e.target.value)} value={newCategory}></input>

                        <label>Add New Destination Notes</label>
                        <input className="m-1" onChange={(e) => setNewNotes(e.target.value)} value={newNotes}></input>

                        <label>Add New Destination Rating</label>
                        <input className="m-1" onChange={(e) => setNewRating(e.target.value)} value={newRating}></input>

                        <div className="text-center">
                            <button type="button" onClick={addDestination} className="m-1">Add Destination</button>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <div className="text-center">
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    )
}