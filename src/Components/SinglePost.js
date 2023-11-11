// This will be an individual post
import React, { Component } from 'react'

import Posts from './Posts'
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Component
export default class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.post = props.post;
        // console.log(props);
    }

    render() {
        return (
            <div className="mb-2" style={{ border: 'solid', borderWidth: '5px', borderColor: 'pink', borderRadius: '1px' }}>
                <h4 className="mt-2">{this.post.blogName} {this.post.rating}</h4>
                <h4>{this.post.blogDate}</h4>
                <p>{this.post.comments}</p>
                <hr style={{ color: "white" }}></hr>
            </div>
        )
    }
}