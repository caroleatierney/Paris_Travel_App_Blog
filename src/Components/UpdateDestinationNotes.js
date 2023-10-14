import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function UpdateDestinationNotes({ getDestinations, destinationId }) {
    // API URL used to update MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'

    // set update state variables and state update function used in update form and set to null
    const [updatedNotes, setUpdatedNotes] = useState('')

    // react bootstrap modal variables   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // when update button is clicked, the updated object is put as a string to MockAPI
    const updateDestinationNotes = (e,) => {
        e.preventDefault()
        setUpdatedNotes(e.target.value)
        fetch(MOCK_API_URL + `/${destinationId}`, {
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({notes: updatedNotes}),
        }).then(() => getDestinations())

        // set form field to blank after update
        setUpdatedNotes('')

        // close modal
        handleClose()
    }

    // react bootstrap modal used to only display update notes form field if user wants to update notes
    return (
        <>
            <div className="text-center montserrat">
                <Button variant="info" onClick={handleShow} >
                    Update Notes
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <div className="flex flex-row text-center">
                        <Modal.Title>Update Notes</Modal.Title>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <Form className='justify-contents-space-evenly'>
                        <textarea className="m-5 p-5" onChange={(e) => setUpdatedNotes(e.target.value)} value={updatedNotes}></textarea>

                        <div className="text-center">
                            <button type="button" onClick={updateDestinationNotes} className="btn btn-secondary p-2 m-2">Update Destination</button>
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