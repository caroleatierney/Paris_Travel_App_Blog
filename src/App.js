import React from 'react'
import './App.css';

import Container from '../node_modules/react-bootstrap/Container';
import Header from './Components/Header.js'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'

export default function App() {
  return (
    <Container className="align-content-center" >

      <header>
        <Header />
      </header>

      <div>
        <NavBar />
      </div>

      <footer>
        <Footer />
      </footer>

    </Container>
  )
}