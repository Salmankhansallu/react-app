import React from 'react';
import './index.css';
import Common from './Common';
const About=()=>{
  return(
    <>
    <Common
      name="Welcome to About Page"
    imgsrc='image/about.jpg'
    visit='/contact'
    btname='Contact Now'
    />
    
    </>
  )
}
export default About;
