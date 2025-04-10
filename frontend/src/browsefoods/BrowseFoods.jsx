import React from 'react'
import Navbar from '../components/Navbar'
import BrowseFood from '../components/BrowseFood'

function BrowseFoods() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen" >
    <BrowseFood/>
    </div>
    

    </>
  );
}

export default BrowseFoods;