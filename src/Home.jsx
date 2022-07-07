import React from 'react';
import './index.css';
// import {NavLink} from 'react-router-dom';
import Common from './Common';
const Home=()=>{
  return(
    <>
   <Common
    name="Grow your business with"
    imgsrc='image/images2.png'
    visit='/service'
    btname='Get Started'
   />
    
    </>
  )
}
export default Home;