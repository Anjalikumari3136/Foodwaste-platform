import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import './About.css'

function About() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen" >
    <AboutUs/>
    </div>
    
    </>
  );
}



export default About;