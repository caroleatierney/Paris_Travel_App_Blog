// Component used to display the header content
import React from 'react'
import '../App.css';
import './Header.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function Header() {
    return (
        <div className="top">
            <div className="topLeft"  >
                <i className="topIcon fa-brands fa-square-facebook"/>
                <i className="topIcon fa-brands fa-square-x-twitter"/>
                <i className="topIcon fa-brands fa-square-instagram"/>
            </div>

            <div className="topCenter">
                <p className="vibesXl">Roseann & Carole's Excellent Adventure!</p>
                <p className="vibesMed">Paris 2023</p>
            </div>

            <div className="topRight">
                <img
                    className="topImage"
                    src="https://i.imgur.com/gq5Qmc8.jpg?1"
                    alt="Carole & Roseann" />
                <i className="topSearchIcon fas fa-search"></i> 
            </div>
        </div>
    )
}