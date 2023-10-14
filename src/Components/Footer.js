// Component used to display the footer content
import React from 'react'
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function Footer() {
    return (
        <div className="footer d-flex flex-column justify-content-center align-items-center my-5">
            <h4 className="montserrat">Feel free to comment on our adventures and like them on our blog!</h4>
            <h4 className="montserrat">Connect with us on whatsapp</h4>
        </div>
    )
}