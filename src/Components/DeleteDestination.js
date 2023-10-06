import React from 'react';
export default function DeleteDestination({ destinationId, onDelete, getDestinations }) {

    // API URL used to update MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'

    // when the delete button is clicked, this function is executed, 
    // passing in the current destination id
    const deleteDestination = () => {
        onDelete(destinationId)
        fetch(MOCK_API_URL + `/${destinationId}`, {
            method: 'DELETE',
        }).then(() => getDestinations())

        // close modal
        handleClose()
    }

    // this is the delete button rendered from the DisplayDestination's component's card
    return (
        <div className="text-center">
            <button type="button" onClick={deleteDestination} className="btn btn-success p-2 m-2">Delete Destination</button>
        </div>
    );
}