// this is the navbar component
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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

        <Router basename="process.env.PUBLIC_URL">
            <div>
                <Nav className="navbar navbar-expand-lg d-flex flex-column">
                    <ul className="navbar-nav d-flex justify-content-space-evenly">
                        <li className="nav-item active">
                            <Button variant="secondary" style={{ color: 'maroon' }} href="/about" className="nav-link montserrat fs-1 px-5">About</Button>
                        </li>
                        <li className="nav-item active">
                            <Button variant="secondary" style={{ color: 'maroon' }} href="/itinerary" className="nav-link montserrat fs-1 px-5">Itinerary</Button>
                        </li>
                        <li className="nav-item active">
                            <Button variant="secondary" style={{ color: 'maroon' }} href="/tripBlog" className="nav-link montserrat fs-1 px-5">Trip Blog</Button>
                        </li>
                        <li>
                            <Button variant="secondary" style={{ color: 'maroon' }} href="/search" className="nav-link montserrat fs-1 px-5">Search</Button>
                        </li>
                        <li>
                            <Button variant="secondary" style={{ color: 'maroon' }} href="/monaLisa" className="nav-link montserrat fs-1 px-5">Mona Lisa</Button>
                        </li>
                    </ul>
                </Nav>

                <Switch>
                    <Route exact path="/" component={About} />

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