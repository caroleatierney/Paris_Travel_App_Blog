// this is the navbar component
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Home from './Home.js'
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
          <Nav className="navbar navbar-expand-sm d-flex container justify-content-center">
            <ul className="navbar-nav d-flex mt-5">
              {/* <li className="nav-item active">
                            <Button as={Link} to="/home" variant="secondary" style={{ color: 'maroon' }} className="nav-link montserratMd me-5">Home</Button>
                        </li> */}
              <li className="nav-item active">
                <Button
                  as={Link}
                  to="/about"
                  variant="secondary"
                  style={{ color: "maroon" }}
                  className="nav-link montserratMd me-5"
                >
                  About
                </Button>
              </li>
              <li className="nav-item active">
                <Button
                  as={Link}
                  to="/itinerary"
                  variant="secondary"
                  style={{ color: "maroon" }}
                  className="nav-link montserratMd me-5"
                >
                  Itinerary
                </Button>
              </li>
              <li className="nav-item active">
                <Button
                  as={Link}
                  to="/tripBlog"
                  variant="secondary"
                  style={{ color: "maroon" }}
                  className="nav-link montserratMd me-5"
                >
                  Trip Blog
                </Button>
              </li>
              <li>
                <Button
                  as={Link}
                  to="/search"
                  variant="secondary"
                  style={{ color: "maroon" }}
                  className="nav-link montserratMd me-5"
                >
                  Search
                </Button>
              </li>
              <li>
                <Button
                  as={Link}
                  to="/monaLisa"
                  variant="secondary"
                  style={{ color: "maroon" }}
                  className="nav-link montserratMd me-5"
                >
                  Mona Lisa
                </Button>
              </li>
              <li>
                <Button
                  roll="link"
                  variant="secondary"
                  style={{ color: "maroon" }}
                  className="nav-link montserratMd me-5"
                  href="https://www.youtube.com/embed/ZM6NvOGpumI?start=68&fs=1"
                  target="_blank"
                >
                  Bob's Video
                </Button>
              </li>
              <li>
                <Button
                  roll="link"
                  variant="secondary"
                  style={{ color: "maroon" }}
                  className="nav-link montserratMd me-5"
                  href="https://moneyinc.com/foodies-oenophiles-walkers-and-joggers-will-love-barge-cruising-in-france/"
                  target="_blank"
                >
                  Money Inc. Review
                </Button>
              </li>
            </ul>
          </Nav>

          <Switch>
            {/* <Route path="/home">
                        <Home />
                    </Route> */}

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
    );
}