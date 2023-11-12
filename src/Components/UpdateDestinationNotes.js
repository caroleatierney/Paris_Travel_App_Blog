// currently this is only intended to update the notes
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
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
                <Button className="btn btn-secondary" onClick={handleShow} >
                    Update Notes
                </Button>
            </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    style={{ marginTop: '200px' }}
                >

                <Modal.Header style={{ background: "#c4b7a6" }}>
                    <div className="flex flex-row text-center">
                        <Modal.Title className="mx-5 p-2 montserratMd" style={{ color: 'white' }}>Update Notes</Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body className='justify-contents-center' style={{ background: "#c4b7a6" }}>
                    <Form className='justify-contents-center'>
                        <textarea 
                            className="m-2"
                            onChange={(e) => setUpdatedNotes(e.target.value)}
                            rows="10"
                            value={updatedNotes}
                            style={{ background: "#e6e2d3", width: '450px' }}
                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-center" style={{ background: "#c4b7a6" }}>

                    <div className="text-center">
                        <Button
                            variant="secondary"
                            onClick={updateDestinationNotes}
                            className="btn btn-secondary mx-5 p-2 montserratSmMd">
                            Update Notes
                        </Button>
                        
                        <Button
                            variant="secondary"
                            onClick={handleClose}
                            className="btn btn-secondary mx-5 p-2 montserratSmMd">
                                Close
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    )
}