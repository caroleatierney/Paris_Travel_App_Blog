// This will display allow user to add a post
import React from 'react'

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
    }

    // when add button is clicked, the new object is posted as a string to MockAPI

// push to array!

    function addPost(e) {
        e.preventDefault()
        fetch(MOCK_API_URL, {
            method: 'POST',
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
        }).then(() => getTripBlog())

        // set form fields to blank after update
        setNewBlogName('')
        // setNewBlogDate('')
        setNewComments('')
        setNewRating('')

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
                    Add a New Post
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <div className="flex flex-row text-center">
                        <Modal.Title className="montserrat bg-secondary">Add a new Post</Modal.Title>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form>
                        <label className="montserrat">Your Name Here</label>
                        <input className="m-1" onChange={(e) => setNewBlogName(e.target.value)} value={newBlogName}></input>

                        <label className="montserrat">Add Your Comments</label>
                        <input className="m-1" onChange={(e) => setNewComments(e.target.value)} value={newComments}></input>

                        <label className="montserrat">Add Your Rating</label>
                        <input className="m-1" onChange={(e) => setNewRating(e.target.value)} value={newRating}></input>

                        <div className="text-center">
                            <button className="montserrat m-1" type="button" onClick={addPost}>Add Post</button>
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