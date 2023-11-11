// Component used to add a new destination to MockAPI

import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../App.css'; 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
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
    const [newReviews, setNewReviews] = useState('[]')
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
                reviews: newReviews,
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
            setNewReviews('')
            setNewRating('')

        // close modal
        handleClose()
    }

    // react bootstrap modal used to only display form fields if user wants to add a destination
    return (
        <>
            <div className="flex flex-row text-center">
                <Button
                    className="montserratSmMd"
                    type="button"
                    variant="secondary"
                    onClick={handleShow}>
                    Add a new destination
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ background: "#c4b7a6" }}>
                    <Modal.Title className="montserratSmMd text-center">Add a destination</Modal.Title>

                </Modal.Header>

                <Modal.Body style={{ background: "#c4b7a6" }}>
                    <form>
                        <label className="montserrat">Add New Destination Title</label>
                        <input className="m-1" onChange={(e) => setNewTitle(e.target.value)} value={newTitle}></input>

                        <label className="montserrat">Add New Destination House Number</label>
                        <input className="m-1" onChange={(e) => setNewHouseNumber(e.target.value)} value={newHouseNumber}></input>

                        <label className="montserrat">Add New Destination Street</label>
                        <input className="m-1" onChange={(e) => setNewStreet(e.target.value)} value={newStreet}></input>

                        <label className="montserrat">Add New Destination City</label>
                        <input className="m-1" onChange={(e) => setNewCity(e.target.value)} value={newCity}></input>

                        <label className="montserrat">Add New Destination State</label>
                        <input className="m-1" onChange={(e) => setNewState(e.target.value)} value={newState}></input>

                        <label className="montserrat">Add New Destination Postal Code</label>
                        <input className="m-1" onChange={(e) => setNewPostalCode(e.target.value)} value={newPostalCode}></input>

                        <label className="montserrat">Add New Destination Country</label>
                        <input className="m-1" onChange={(e) => setNewCountry(e.target.value)} value={newCountry}></input>

                        <label className="montserrat">Add New Destination Phone</label>
                        <input className="m-1" onChange={(e) => setNewPhone(e.target.value)} value={newPhone}></input>

                        <label className="montserrat">Add New Destination Category</label>
                        <input className="m-1" onChange={(e) => setNewCategory(e.target.value)} value={newCategory}></input>

                        <label className="montserrat">Add New Destination Notes</label>
                        <input className="m-1" onChange={(e) => setNewNotes(e.target.value)} value={newNotes}></input>

                        <label className="montserrat">Add New Destination Rating</label>
                        <input className="m-1" onChange={(e) => setNewRating(e.target.value)} value={newRating}></input>

                    </form>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-center" style={{ background: "#c4b7a6" }}>
                    <div className="text-center">
                        <Button 
                            className="montserratSmMd"
                            type="button"
                            variant="secondary"
                            onClick={addDestination}>
                            Add Destination
                        </Button>
                        
                        <Button 
                            className="montserratSmMd"
                            type="button"
                            variant="secondary"
                            onClick={handleClose}>
                            Close
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    )
}