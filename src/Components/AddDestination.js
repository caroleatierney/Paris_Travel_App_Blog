// Component used to add a new destination to MockAPI

import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

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
                    className="montserratSm mx-5 p-3"
                    style={{ color: 'black', textShadow: '1px 1px 1px #d97fb9f5', border: 'solid', borderWidth: '1px' }}
                    type="button"
                    variant="secondary"
                    onClick={handleShow}>
                    Add a new destination
                </Button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                style={{ marginTop: '200px' }}
            >

                <div style={{ color: 'white', border: 'solid', borderWidth: '5px', borderColor: 'white', borderRadius: '10px' }}>

                    <Modal.Header className="justify-content-center red" style={{ background: "#c4b7a6" }}>
                        <Modal.Title className="montserratMd mb-1" style={{ color: 'white' }}>Add a destination</Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{ background: "#c4b7a6" }}>
                        <form>
                            <Container className="d-flex flex-row justify-content-evenly">
                            <div className="d-flex flex-column">
                                <label className="montserratSm mb-1 white">Destination Title</label>
                                <input className="m-1" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} style={{ background: "#e6e2d3" }} />

                                <label className="montserratSm mb-1 white">House Number</label>
                                <input className="m-1" onChange={(e) => setNewHouseNumber(e.target.value)} value={newHouseNumber} style={{ background: "#e6e2d3" }} />

                                <label className="montserratSm mb-1 white">Street</label>
                                <input className="m-1" onChange={(e) => setNewStreet(e.target.value)} value={newStreet} style={{ background: "#e6e2d3" }} />

                                <label className="montserratSm mb-1 white">City</label>
                                <input className="m-1" onChange={(e) => setNewCity(e.target.value)} value={newCity} style={{ background: "#e6e2d3" }} />

                                <label className="montserratSm mb-1 white">State</label>
                                <input className="m-1" onChange={(e) => setNewState(e.target.value)} value={newState} style={{ background: "#e6e2d3" }} />

                                <label className="montserratSm mb-1 white">Postal Code</label>
                                <input className="m-1" onChange={(e) => setNewPostalCode(e.target.value)} value={newPostalCode} style={{ background: "#e6e2d3" }} />

                                <label className="montserratSm mb-1 white">Country</label>
                                <input className="m-1" onChange={(e) => setNewCountry(e.target.value)} value={newCountry} style={{ background: "#e6e2d3" }} />
                            </div>

                            <div className="d-flex flex-column">
                                    <label className="montserratSm mb-1 white">Phone</label>
                                <input className="m-1" onChange={(e) => setNewPhone(e.target.value)} value={newPhone} style={{ background: "#e6e2d3" }} />

                                    <label className="montserratSm mb-1 white">Category</label>
                                <input className="m-1" onChange={(e) => setNewCategory(e.target.value)} value={newCategory} style={{ background: "#e6e2d3" }} />

                                    <label className="montserratSm mb-1 white">Notes</label>
                                <input className="m-1" onChange={(e) => setNewNotes(e.target.value)} value={newNotes} style={{ background: "#e6e2d3" }} />

                                    <label className="montserratSm mb-1 white">Rating</label>
                                <input className="m-1" onChange={(e) => setNewRating(e.target.value)} value={newRating} style={{ background: "#e6e2d3" }} />
                            </div>
                            </Container>
                        </form>
                    </Modal.Body>

                    <Modal.Footer className="d-flex justify-content-evenly" style={{ background: "#c4b7a6" }}>
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
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}