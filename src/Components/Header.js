import React from 'react'
import './Header.css';
// import './node_modules/bootswatch/dist/minty/bootstrap.min.css';

export default function Header() {
    return (
        <div className="header d-flex flex-column justify-content-center align-items-center">
            <p className="tangerine">Roseann & Carole's Excellent Adventure!</p>
            <p className="tangerine">Paris 2023</p>
            <p className="tangerine">Travel Planner and Blog</p>
        </div>
    )
}