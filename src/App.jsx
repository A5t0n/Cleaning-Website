import './App.css'
import { Route,Routes } from 'react-router-dom'


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
