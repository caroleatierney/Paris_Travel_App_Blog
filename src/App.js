import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home.js'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import SearchForm from './Components/SearchForm.js'
import About from './Components/About.js'
import ApiSearch from './Components/ApiSearch.js'

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/searchForm">Search for things to do in Paris!</Link>
            </li>
            <li>
              <Link to="/apiSearch">Search Here API</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/apiSearch">
            <ApiSearch />
          </Route>

          <Route path="/about">
            <About />
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
  )
}