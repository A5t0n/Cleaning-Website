import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import NavBar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'

function App() {
  return (
     <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Services/>}/>
      <Route path="portfolio" element={<Contact/>}/>
      </Route>      
    </Routes>
    </>
  )
}

export default App
