import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skill/Skill'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
