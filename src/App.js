import React from 'react'
import './App.css';

import Container from '../node_modules/react-bootstrap/Container';
import Header from './Components/Header.js'
import Navigation from './Components/Navigation.js'
import Footer from './Components/Footer.js'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component with header, navigation and footer
// Most other components are exected from the navigation component 
export default function App() {
  return (
    
    <Container id="bgImage" fluid className="align-content-center" style={{
      backgroundImage: `url("https://i.imgur.com/nw6Iy7g.png")`
    }} >

        <header>
          <Header />
        </header>

        <div>
          <Navigation />
        </div>

        <footer>
          <Footer />
        </footer>

    </Container>
  )
}