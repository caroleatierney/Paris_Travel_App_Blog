// this is the navbar component
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import About from './About.js'
import Itinerary from './Itinerary.js'
import Search from './Search.js'
import MonaLisa from './MonaLisa.js'
import TripBlog from './TripBlog.js'

import Button from 'react-bootstrap/Button';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function NavBar() {
    return (

        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Nav className="navbar navbar-expand-lg d-flex flex-column">
                    <ul className="navbar-nav d-flex justify-content-space-evenly">
                        <li className="nav-item active">
                            <Button as={Link} to="/about" variant="secondary" style={{ color: 'maroon' }} className="nav-link montserrat fs-1 px-5">About</Button>
                        </li>
                        <li className="nav-item active">
                            <Button as={Link} to="/itinerary" variant="secondary" style={{ color: 'maroon' }} className="nav-link montserrat fs-1 px-5">Itinerary</Button>
                        </li>
                        <li className="nav-item active">
                            <Button as={Link} to="/tripBlog" variant="secondary" style={{ color: 'maroon' }}  className="nav-link montserrat fs-1 px-5">Trip Blog</Button>
                        </li>
                        <li>
                            <Button as={Link} to="/search" variant="secondary" style={{ color: 'maroon' }} className="nav-link montserrat fs-1 px-5">Search</Button>
                        </li>
                        <li>
                            <Button as={Link} to="/monaLisa" variant="secondary" style={{ color: 'maroon' }} className="nav-link montserrat fs-1 px-5">Mona Lisa</Button>
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

                    <Route path="/monaLisa">
                        <MonaLisa />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}