import React from 'react'
import img from '../../assets/avataaars.svg'
import "./Home.css"

export default function Home() {
  return (
    <>
    <div className="home-sec">
      <img src={img} className='img' alt="" />
      <h2 >START FRAMEWORK</h2>
      <div className="star d-flex justify-content-center me-3">
                     <div className="line-1 me-3 rounded-2"></div>
                   <i class="fa-solid fa-star"></i>
                     <div className="line-2 ms-3 rounded-2"></div>
                 </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
