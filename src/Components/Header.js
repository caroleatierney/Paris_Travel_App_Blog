// Component used to display the header content
import React from 'react'
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function Header() {
    return (
        <div className="header d-flex flex-column justify-content-center align-items-center my-5">
            <p className="vibes display-2">Roseann & Carole's Excellent Adventure!</p>
            <p className="vibes display-3">Paris 2023</p>
        </div>
    )
}