import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import About from './About.js'
import Itinerary from './Itinerary.js'
import Search from './Search.js'
import DailyBlog from './DailyBlog.js'

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
                            <Link className="nav-link montserrat fs-2" to="/about">About</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link montserrat fs-2" to="/itinerary">Itinerary</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link montserrat fs-2" to="/dailyBlog">Trip Blog</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link montserrat fs-2" to="/search">Search</Link>
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

                    <Route path="/dailyBlog">
                        <DailyBlog />
                    </Route>

                    <Route path="/search">
                        <Search />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}