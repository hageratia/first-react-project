import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
    <div className="about-sec text-center">
        <h2>ABOUT COMPONENT</h2>
        <div className="star d-flex justify-content-center me-3">
                     <div className="line-1 me-3 rounded-2"></div>
                   <i class="fa-solid fa-star"></i>
                     <div className="line-2 ms-3 rounded-2"></div>
                 </div>
      <div className="container">
      <div className="row">
        <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
