// This will display allow user to add a post
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Component
export default function AddPost() {
    // API URL used to add to MockAPI
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/TripBlog'

    // state add state variables and state update function used in add form and set to null
    const [newBlogName, setNewBlogName] = useState('');
    const [newBlogDate, setNewBlogDate] = useState(getDate());
    const [newComments, setNewComments] = useState('');
    const [newRating, setNewRating] = useState('');

    // react bootstrap modal variables   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    };

    // when add button is clicked, the new object is posted as a string to MockAPI
    async function addPost(e) {
        e.preventDefault()

        // console.log(newBlogName, newBlogDate, newComments, newRating)
        // Get the existing blogArray data from Mock API
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        const blogArray = data[0].blogArray;
        
        console.log(data)
        console.log(blogArray)

        // Add the new post to the blogArray
        blogArray.push({
            blogName: newBlogName,
            blogDate: newBlogDate,
            comments: newComments,
            rating: newRating
        });

        // Update the blogArray data in Mock API
        await fetch(MOCK_API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                blogArray: blogArray
            })
        });

        // // Reload the page to display the updated blogArray data
        // window.location.reload();
    
        fetch(MOCK_API_URL, {
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                blogName: newBlogName,
                blogDate: newBlogDate,
                comments: newComments,
                rating: newRating
            }),
        })

        // set form fields to blank after update
        setNewBlogName('')
        setNewComments('')
        setNewRating('')

        // close modal
        handleClose()
    }

    // react bootstrap modal used to only display form fields if user wants to add a destination
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <div style={{ color: 'white', border: 'solid', borderWidth: '5px', borderColor: 'white', borderRadius: '5px' }}>
                    <Modal.Header className="d-flex justify-content-center" style={{ background: "#c4b7a6" }}>
                        <div className="flex flex-row text-center">
                            <Modal.Title className="mx-5 p-2 montserratMd" style={{ color: 'white' }}>Add a new Post</Modal.Title>
                        </div>

                    </Modal.Header>

                    <Modal.Body style={{ background: "#c4b7a6" }}>
                        <form className="d-flex flex-column justify-content-space-evenly">

                            <label htmlFor="bloggersName" className="montserratMd mb-1 white">Your Name Here</label>
                            <input 
                                className="m-1" 
                                onChange={(e) => setNewBlogName(e.target.value)} 
                                style={{ background: "#e6e2d3" }}
                                value={newBlogName}></input>

                            <label htmlFor="comments" className="montserratMd mb-1 white">Add Your Comments</label>
                            <textarea 
                                className="m-1" 
                                onChange={(e) => setNewComments(e.target.value)} 
                                rows="5"
                                style={{ background: "#e6e2d3" }}
                                value={newComments}/>

                            <label htmlFor="rating" className="montserratMd mb-1 white">Add Your Rating</label>
                            <input 
                                className="m-1" 
                                onChange={(e) => setNewRating(e.target.value)} 
                                style={{ background: "#e6e2d3" }}
                                value={newRating}></input>
                        </form>
                    </Modal.Body>

                    <Modal.Footer className="d-flex justify-content-center" style={{ background: "#c4b7a6" }}>
                        <div className="text-center">
                            <button
                                variant="secondary"
                                className="btn btn-secondary mx-5 p-2 montserraSm"
                                type="button"
                                onClick={addPost}>
                                Add Post
                            </button>

                            <Button 
                                variant="secondary" 
                                onClick={handleClose} 
                                className="btn btn-secondary mx-5 p-2 montserraSm">
                                    Close
                            </Button>
                        </div>
                    </Modal.Footer>

                </div>
            </Modal>

            <div className="text-center montserrat">
                <Button
                    className="btn btn-secondary my-3 montserratSm"
                    onClick={handleShow} >
                    Add a New Post
                </Button>
            </div>
        </>
    )
}