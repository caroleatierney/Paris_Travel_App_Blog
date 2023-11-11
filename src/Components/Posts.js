// This will display our posts
import React, {Component} from 'react'

import SinglePost from './SinglePost.js'
import AddPost from './AddPost.js'

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Component
export default class Posts extends Component {
    constructor(props) {
        super(props)
        // console.log(props);
        // console.log(props.tripBlogs.blogArray);
        // this.tripBlogs = props.tripBlogs
        this.tripBlogs = props.tripBlogs.blogArray
    }

    render() {
        return (
            <div style={{ border: 'solid', borderWidth: '5px', borderColor: 'white', borderRadius: '5px' }}>
                <h1>Posts</h1>
                {this.tripBlogs.map((post, index) => {
                    // {console.log(post)}
                    // {console.log(post.blogArray)}
                    return <SinglePost key={index} post={post} />
                })}
            </div>
        )
    }
}