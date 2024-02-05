// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  let [scrolling,setScrolling] = useState(false) ;

  useEffect (()=>{
  window.addEventListener('scroll' , handleScroll);
  return () => window.removeEventListener('scroll',handleScroll);
  },[])
  
   const handleScroll = () =>{
    if(window.scrollY > 50) {
      setScrolling(true);
    }else {
      setScrolling(false)
    }
   }
  
  return (
    <>
    <nav  class={`navbar navbar-expand-lg  position-sticky top-0 padding  ${scrolling? 'navbar-scroll' : ''}`}>
  <div className="container">
    <Link className="navbar-brand text-white fw-bold" to={""}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item me-2">
        <NavLink className="nav-link text-white rounded-2 fw-bold" to={"about"}>About</NavLink>
        </li>
        <li className="nav-item me-2">
        <NavLink className="nav-link text-white rounded-2 fw-bold" to={"portfolio"}>Portfolio</NavLink >
        </li>
        <li className="nav-item me-2">
          <NavLink className="nav-link text-white rounded-2 fw-bold" to={"contacts"}>Contact</NavLink>
        </li>
        </ul>    
    </div>
  </div>
</nav>
</>
  )
}



