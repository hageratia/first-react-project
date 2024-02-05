import React from 'react'
import "./Contacts.css"

export default function Contacts() {
  return (
    <>
    <div className="contacts-sec text-center">
      <h2>CONATCT SECTION</h2>
      <div className="star d-flex justify-content-center me-3">
                     <div className="line-1 me-3 rounded-2"></div>
                   <i class="fa-solid fa-star"></i>
                     <div className="line-2 ms-3 rounded-2"></div>
                 </div>
      <div className="input-sec d-flex flex-column">
        <input type="text" placeholder='userName' className='form-control border-0 border-bottom py-3 position-relative'/>
        <input type="text" placeholder='userAge' className='form-control border-0 border-bottom py-3 position-relative'/>
        <input type="email" placeholder='userEmail' className='form-control border-0 border-bottom py-3 position-relative'/>
        <input type="password" placeholder='usePassword' className='form-control border-0 border-bottom py-3 position-relative'/>
      </div>
      <button className="btn mt-4 text-white">send Message</button>
    </div>                                                                                                                           
    </>
  )
}
