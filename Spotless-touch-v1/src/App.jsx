import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='App'>
    <div className='components'>
    <NavBar/>
    <Body/>
    <Footer/>
    </div>
   
    </div>  
  )
}

export default App
