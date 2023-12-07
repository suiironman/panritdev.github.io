import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Project from './components/Project/Projects'
import About from './components/About'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Footer />
      </div>
  )
}

export default App