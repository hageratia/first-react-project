import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
    <footer className=" text-white ">
        <div className="sec-1"><div className="row">
            <div className="col-md-4">
                <h2>Location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <h2>AROUND THE WEB</h2>
                <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                    <div className='icons'></div>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                    <li><i class="fa-solid fa-globe"></i></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        </div>
        
        </footer>
        <div className="sec-2 text-center">
            <p>Copyright © Your Website 2021</p>
        </div>
    </>
  )
}

