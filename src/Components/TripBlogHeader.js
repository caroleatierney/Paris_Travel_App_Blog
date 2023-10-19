// This is intended for daily updates of our trip
import React from 'react'

import '../App.css';
import './TripBlogHeader.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function TripBlogHeader() {
    return (
        <div className="header justify-content-center">
            <div className="headerTitles justify-content-center">
                <span className='headerTitleSm'>Our virtual Scrapbook</span>
                <span className='headerTitleLg'>Blogging about Paris</span>
            </div>

            <img
                className="headerImg"
                src='https://i.imgur.com/Kqx6nJ7.png'
                alt='Paris Bridge'
            />
        </div >
    )
}