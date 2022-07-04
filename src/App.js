import React from 'react';
import './index.css';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import {Navigate} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
const App=()=>{

  return(
    <>
    <Navbar/>
    
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/service' element={<Service/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='*' element={<Navigate to="/"/>}></Route>
      {/* <Redirect to="/"></Redirect> */}
     </Routes>
     <br/>
     <br/>
     <br/>
     <Footer/>
    </>
  )
}
export default App;