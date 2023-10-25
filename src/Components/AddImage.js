// Component used to add a new photo to the scrapbook and save to MockAPI

import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function AddImage({ getTripBlog }) {

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    // API URL used to add to MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/TripBlog'

    // state add state variables and state update function used in add form and set to null
    const [newTitle, setNewTitle] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newDate, setNewDate] = useState(getDate());
    const [newBlog, setNewBlog] = useState('[]');

    // react bootstrap modal variables   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // when add button is clicked, the new object is posted as a string to MockAPI
    function addImage(e) {
        e.preventDefault()
        fetch(MOCK_API_URL, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: newTitle,
                image: newImage,
                date: newDate,
                blog: newBlog
            }),
        }).then(() => getTripBlog())

        // set form fields to blank after update
        setNewTitle('')
        setNewImage('')
        setNewDate('')
        setNewBlog('')

        // close modal
        handleClose()
    }

    // react bootstrap modal used to only display form fields if user wants to add a destination
    return (
        <>
            <div className="text-center">
                <Button className="MontserratMd" variant="secondary" style={{
                    color: 'black', textShadow: '1px 1px 1px #d97fb9f5', border: 'solid', borderWidth: '1px'
                }} onClick={handleShow} >
                    Add a new photo
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <div className="flex flex-row text-center">
                        <Modal.Title className="montserrat bg-secondary">Add a photo</Modal.Title>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form>
                        <label className="montserrat">Add New Photo Title</label>
                        <input className="m-1" onChange={(e) => setNewTitle(e.target.value)} value={newTitle}></input>

                        <label className="montserrat">Add New Photo</label>
                        <input className="m-1" onChange={(e) => setNewImage(e.target.value)} value={newImage}></input>
                        <div className="text-center">
                            <button className="montserrat m-1" type="button" onClick={addImage}>Add Photo</button>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <div className="text-center">
                        <Button className="vibes" variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    )
}