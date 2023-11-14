// Component used to delete a destination
import React from 'react';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function DeleteDestination({ destinationId, onDelete, getDestinations }) {

    // API URL used to update MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'
    const DELETE_PW = process.env.REACT_APP_DELETE_PASSWORD

    // when the delete button is clicked, this function is executed, 
    // passing in the current destination id
    const deleteDestination = () => {

        // only admin can delete
        alert('Enter admin password to delete')
        let password = prompt("Please enter the admin password");
        let response;
        if (password == DELETE_PW) {
            response = "Blog will be deleted";
        } else {
            response = "You do not have authority, contact the admin";
            return
        }
        
        onDelete(destinationId)
        fetch(MOCK_API_URL + `/${destinationId}`, {
            method: 'DELETE',
        }).then(() => getDestinations())

        const handleClose = () => {
            // Your code to close the modal goes here
        };

        // close modal
        handleClose()
    }

    // this is the delete button rendered from the DisplayDestination's component's card
    return (
        <div className="text-center">
            <button type="button" onClick={deleteDestination} className="btn btn-secondary my-3 montserraSm">Delete</button>
        </div>
    );
}