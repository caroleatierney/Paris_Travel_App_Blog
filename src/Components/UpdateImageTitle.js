// currently this is only intended to update the image and title
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function UpdateImageTitle({ getTripBlog, blogId }) {
    // API URL used to update MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/TripBlog'

    // set update state variables and state update function used in update form and set to null

{/* need to set to passed in values */ }
    const [updatedTitle, setUpdatedTitle] = useState('')
    const [updatedImage, setUpdatedImage] = useState('')

    // react bootstrap modal variables   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // when update button is clicked, the updated object is put as a string to MockAPI
    const updateImageTitle = (e,) => {
        e.preventDefault()
        setUpdatedTitle(e.target.value)
        setUpdatedImage(e.target.value)
        fetch(MOCK_API_URL + `/${blogId}`, {
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
            ({
                title: updatedTitle,
                image: updatedImage
            }),
        }).then(() => getTripBlog())

        // set form field to blank after update
        setUpdatedTitle('')
        setUpdatedImage('')

        // close modal
        handleClose()
    }

    // react bootstrap modal used to only display update notes form field if user wants to update notes
    return (
        <>
            <div className="text-center montserrat">
                <Button
                    className="btn btn-secondary my-3 montserraSm" 
                    onClick={handleShow}
                >
                    Update
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <div style={{ color: 'white', border: 'solid', borderWidth: '5px', borderColor: 'white', borderRadius: '5px'}}>
                    <Modal.Header className="d-flex justify-content-center white" style={{ background: "#c4b7a6"}}>
                        <Modal.Title className="montserratMd mb-1" style={{ color: 'white' }}>Update</Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{ background: "#c4b7a6" }}>
                        <Form className='d-flex flex-column justify-contents-space-evenly'>
                            <label htmlFor="title" className="montserratMd mb-1 white">Enter New Title</label>
                            <input
                                className="form-control p-3 mb-3"
                                id="title"
                                style={{ background: "#e6e2d3" }}
                                onChange={(e) => setUpdatedTitle(e.target.value)}
                                value={updatedTitle}
                            />

                            <label htmlFor="photo" className="montserratMd mb-1 white">Replace Photo</label>
                            <input
                                className="form-control p-3 mb-3"
                                id="photo"
                                style={{ background: "#e6e2d3"}}
                                onChange={(e) => setUpdatedImage(e.target.value)}
                                value={updatedImage}
                            />
                        </Form>

                    </Modal.Body>

                    <Modal.Footer className="d-flex justify-content-center" style={{ background: "#c4b7a6" }}>
                        <Button variant="secondary" onClick={updateImageTitle} className="btn btn-secondary mx-5 p-2 montserraSm" >
                            Update
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