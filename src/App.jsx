import './App.css';
import { Route,Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';


function App() {
  return (
     <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>      
    </Routes>
    </>
  )
}

export default App;
