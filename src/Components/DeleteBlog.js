// Component used to delete a blog
import React from 'react';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function DeleteBlog({ blogId, onDelete, getTripBlog }) {

    // API URL used to update MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/TripBlog'

    // when the delete button is clicked, this function is executed, 
    // passing in the current blog id
    const deleteBlog = () => {
        onDelete(blogId)
        fetch(MOCK_API_URL + `/${blogId}`, {
            method: 'DELETE',
        }).then(() => getTripBlog())

        const handleClose = () => {
            // Your code to close the modal goes here
        };

        // close modal
        handleClose()
    }

    // this is the delete button rendered from the TripBlog's component's card
    return (
        <div className="text-center">
            <button type="button" onClick={deleteBlog} className="btn btn-secondary my-3 montserratSmMd">Delete</button>
        </div>
    );
}