import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Home from './Home.js'
import About from './About.js'
import Itinerary from './Itinerary.js'
import Search from './Search.js'
import DailyBlog from './DailyBlog.js'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function NavBar() {
    return (

    <Router>
        <div>
            <Nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-space-between">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/itinerary">Itinerary</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/dailyBlog">Trip Blog</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/search">Search for Paris Destinations!</Link>
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

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
    )
}