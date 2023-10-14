import React from 'react'
import './App.css';

import Container from '../node_modules/react-bootstrap/Container';
import Header from './Components/Header.js'
import Navigation from './Components/Navigation.js'
import Footer from './Components/Footer.js'

export default function App() {
  return (
    // <Container id="bgImage" fluid className="align-content-center" style={{
    //   backgroundImage: `url("https://i.imgur.com/2L1gLOQ.jpg")`
    // }} >

    <Container id="bgImage" fluid className="align-content-center" style={{
      backgroundImage: `url("https://i.imgur.com/XDYIAGV.png")`
    }} >

    {/* <Container> */}
      
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