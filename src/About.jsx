import React, { useImperativeHandle } from 'react';
import './index.css';
import Common from './Common';
import aboutimg from '../src/image/about.jpg';
const About=()=>{
  return(
    <>
    <Common
      name="Welcome to About Page"
    imgsrc={aboutimg}
    visit='/contact'
    btname='Contact Now'
    />
    
    </>
  )
}
export default About;
