import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Card></Card>
     <Footer></Footer>
    </>
  )
}

export default App
