import React from 'react';
import homeimg from '../src/image/home.png';
import './index.css';
// import {NavLink} from 'react-router-dom';
import Common from './Common';
const Home=()=>{
  return(
    <>
   <Common
    name="Grow your business with"
    imgsrc={homeimg}
    visit='/service'
    btname='Get Started'
   />
    
    </>
  )
}
export default Home;