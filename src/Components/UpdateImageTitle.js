// currently this is only intended to update the image and title
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function UpdateImageTitle({ getTripBlog, blogId }) {
    // API URL used to update MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/TripBlog'

    // set update state variables and state update function used in update form and set to null
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
                <Button className="btn btn-secondary" onClick={handleShow} >
                    Update
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <div className="flex flex-row text-center">
                        <Modal.Title>Update</Modal.Title>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <Form className='justify-contents-space-evenly'>
                        <textarea className="m-5 p-5" onChange={(e) => setUpdatedTitle(e.target.value)} value={updatedTitle}></textarea>

                        <textarea className="m-5 p-5" onChange={(e) => setUpdatedImage(e.target.value)} value={updatedImage}></textarea>

                        <div className="text-center">
                            <button type="button" onClick={updateImageTitle} className="btn btn-secondary my-3 montserraSm">Update</button>
                        </div>
                    </Form>

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