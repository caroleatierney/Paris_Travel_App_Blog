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
    const [newDescription, setNewDescription] = useState('[]');

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
                description: newDescription
            }),
        }).then(() => getTripBlog())

        // set form fields to blank after update
        setNewTitle('')
        setNewImage('')
        setNewDescription('')

        // close modal
        handleClose()
    }

    // react bootstrap modal used to only display form fields if user wants to add a destination
    return (
        <>
            <div className="text-center montserrat">
                <Button 
                    className="btn btn-secondary my-3 montserraSm" 
                    onClick={handleShow} >
                        Add a new photo
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <div style={{ color: 'white', border: 'solid', borderWidth: '5px', borderColor: 'white', borderRadius: '5px' }}>
                    <Modal.Header className="d-flex justify-content-center" style={{ background: "#c4b7a6" }}>
                        <div className="flex flex-row text-center">
                            <Modal.Title className="mx-5 p-2 montserratMd" style={{color: 'white'}}
                                onClick={handleShow} >Add a photo</Modal.Title>
                        </div>

                    </Modal.Header>

                    <Modal.Body style={{ background: "#c4b7a6" }}>
                        <form className="d-flex flex-column justify-content-space-evenly">
                                <label htmlFor="photoTitle" className="montserratMd mb-1 white">Photo Title</label>
                                <input 
                                    className="form-control p-3 mb-3"
                                    style={{ background: "#e6e2d3" }}
                                    onChange={(e) => setNewTitle(e.target.value)} value={newTitle}>
                                </input>

                                <label htmlFor="photoLink" className="montserratMd mb-1 white">Photo Link</label>
                                <input
                                className="form-control p-3 mb-3"
                                    style={{ background: "#e6e2d3" }}
                                    onChange={(e) => setNewImage(e.target.value)} value={newImage}></input>

                                <label htmlFor="description" className="montserratMd mb-1 white">Description</label>
                                <textarea
                                    className="form-control p-3 mb-3"
                                    style={{ background: "#e6e2d3" }}
                                    rows="5"
                                    onChange={(e) => setNewDescription(e.target.value)} value={newDescription}/>
                            </form>

                    </Modal.Body>
                    
                    <Modal.Footer className="d-flex justify-content-center" style={{ background: "#c4b7a6" }}>
                        <Button 
                        variant="secondary" 
                        onClick={addImage} 
                        className="btn btn-secondary mx-5 p-2 montserraSm" >
                            Add
                        </Button>

                        <Button variant="secondary" onClick={handleClose} className="btn btn-secondary mx-5 p-2 montserraSm">
                            Close
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}