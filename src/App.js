import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';

import Container from '../node_modules/react-bootstrap/Container';
import Nav from '../node_modules/react-bootstrap/Nav';

import Home from './Components/Home.js'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import SearchForm from './Components/SearchForm.js'
import About from './Components/About.js'
import DailyBlog from './Components/DailyBlog.js'

export default function App() {
  return (
    <Container>
      <Router>
        <div>
          <header>
            <Header />
          </header>

          <Nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-space-between">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/dailyBlog">Trip Blog</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/searchForm">Search for Paris Destinations!</Link>
                </li>
              </ul>
          </Nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/dailyBlog">
              <DailyBlog />
            </Route>

            <Route path="/searchForm">
                <SearchForm />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <footer>
            <Footer />
          </footer>

        </div>
      </Router>
    </Container>
  )
}