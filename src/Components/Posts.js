// This will return the posts from the blog
import { useState, useEffect } from 'react'

import SinglePost from './SinglePost.js'
import AddPost from './AddPost.js'

import '../App.css';

// API URL used to add to MockAPI
const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/TripBlog'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Component
export default function Posts({blogId}) {
    // Define a state variable to store the post array
    const [tripPosts, setTripPosts] = useState([]);

    // Update the state variable with the new post array
    async function updateTripPosts() {
        // Fetch the updated post array from the API'
        const response = await fetch(MOCK_API_URL + `/${blogId}`);

        // If the response is successful, parse the JSON data
        if (response.status === 200) {
            const data = await response.json();

            // Set the tripBlogs state variable with the parsed JSON data
            setTripPosts(data.blogArray);
        }
    };

    // Re-render the component whenever the state variable changes
    useEffect(() => {
        updateTripPosts();
        console.log('useEffect() hook called');
    }, [blogId]);

    return (
        <div style={{ border: 'solid', borderWidth: '5px', borderColor: 'white', borderRadius: '5px' }}>
            <h1>Posts</h1>
            {tripPosts.map((post, index) => {
                // {console.log(post)}
                // {console.log(post.blogArray)}
                return <SinglePost key={index} post={post} />
            })}

            <AddPost
                blogId={blogId}
                updateTripPosts={updateTripPosts}
            />
          
        </div>
    )
}