import React from 'react'
import Home from './home/Home'
import {} from "react-router-dom"
import { Routes, Route } from 'react-router-dom'
import BrowseFoods from './browsefoods/BrowseFoods'
import About from './aboutUs/About'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


function App(){ 
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/browse-food" element={<BrowseFoods/>}/>
      <Route path="/about-Us" element={<About/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      
      
    </Routes>
    </>
  );
}
export default App;




