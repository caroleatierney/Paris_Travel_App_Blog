// Component used to display the header content
import React from 'react'
import '../App.css';
import './Header.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function Header() {
    return (
        <div className="top">
            <div className="topLeft">          
                <div>   
                    <i 
                        className="topIcon fa-brands fa-square-facebook"
                        onClick={() => window.open("https://www.facebook.com/caroleatierney")}
                    />
                    <i
                        className="topIcon fa-brands fa-square-x-twitter"
                        onClick={() => window.open("https://www.twitter.com/CaroleATierney")}
                    />
                    <i 
                        className="topIcon fa-brands fa-square-instagram"
                        onClick={() => window.open("https://www.instagram.com/caroleatierney/")}
                    />
                    <i 
                        className="topIcon fa-brands fa-whatsapp"
                        onClick={() => window.open("https://wa.me/16177750725")}
                    />
                </div>
                <img
                    className="topImage"
                    src="https://i.imgur.com/VXqnJPw.png"
                    alt="Roseann"
                />
            </div>

            <div className="topCenter">
                <p className="vibesXl mt-5">Roseann & Carole's Excellent Adventure!</p>
                <p className="vibesMd mb-5">Paris 2023</p>
            </div>

            <div className="topRight">
                <img
                    className="topImage"
                    src="https://i.imgur.com/gq5Qmc8.jpg?1"
                    alt="Carole"
                />
                <div>
                    <i
                        className="topIcon fa-brands fa-square-facebook"
                        onClick={() => window.open("https://www.facebook.com/caroleatierney")}
                    />
                    <i
                        className="topIcon fa-brands fa-square-x-twitter"
                        onClick={() => window.open("https://www.twitter.com/CaroleATierney")}
                    />
                    <i
                        className="topIcon fa-brands fa-square-instagram"
                        onClick={() => window.open("https://www.instagram.com/caroleatierney/")}
                    />
                    <i
                        className="topIcon fa-brands fa-whatsapp"
                        onClick={() => window.open("https://wa.me/16177750725")}
                    />
                </div>  
            </div>
            {/* <div> */}
                {/* <i className="topSearchIcon fas fa-search"></i> */}
            {/* </div> */}
        </div>
    )
}