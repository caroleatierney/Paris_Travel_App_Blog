import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import About from './About.js'
import Itinerary from './Itinerary.js'
import Search from './Search.js'
import TripBlog from './TripBlog.js'
import Button from 'react-bootstrap/Button';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function NavBar() {
    return (

        <Router>
            <div>
                <Nav className="navbar navbar-expand-lg d-flex flex-column">
                    <ul className="navbar-nav d-flex justify-content-space-evenly">
                        <li className="nav-item active">
                            <Button variant="primary" href="/about" className="nav-link montserrat fs-1 p-5">About</Button>
                        </li>
                        <li className="nav-item active">
                            <Button variant="primary" href="/itinerary" className="nav-link montserrat fs-1 p-5">Itinerary</Button>
                        </li>
                        <li className="nav-item active">
                            <Button variant="primary" href="/tripBlog" className="nav-link montserrat fs-1 p-5">Trip Blog</Button>
                        </li>
                        <li>
                            <Button variant="primary" href="/search" className="nav-link montserrat fs-1 p-5">Search</Button>
                        </li>
                    </ul>
                </Nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/itinerary">
                        <Itinerary />
                    </Route>

                    <Route path="/tripBlog">
                        <TripBlog />
                    </Route>

                    <Route path="/search">
                        <Search />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}