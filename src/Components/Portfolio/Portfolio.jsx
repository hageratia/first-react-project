
import React, { useState } from 'react'
import './Portfolio.css'
const images = require.context('../../assets/images', true);
const imageList = images.keys().map(image => images(image));

export default function Portfolio() {


  const [src,setSrc] = useState("");
  const [display,setDisplay] = useState('d-none')

function handleImg(list) {
  setSrc(`${list}`);
  setDisplay('d-flex')
}

const exitPage = (e) => {
  setDisplay('d-none');
}

const stopprog = (e) => {
  e.stopPropagation();
}

  return (
    <>
      <section className='py-5 port-sec'>
      <div className="container text-center">
      <h2>PORTFOLIO COMPONENT</h2>
              <div className="star d-flex justify-content-center me-3">
                     <div className="line-1 me-3 rounded-2"></div>
                   <i class="fa-solid fa-star"></i>
                     <div className="line-2 ms-3 rounded-2"></div>
                 </div>
          <div className="row py-4 g-3">
            {imageList.map((list,index)=> (
              <div key={index} className="col-md-4 img-section   " onClick={()=> handleImg(list)}>
                <div className="images position-relative " >
                <img  src={list} className='w-100 rounded-3'  alt=""   />
                <div className="layout position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white "></i>
                </div>
                </div>
              </div>
            ))}
            {imageList.map((list,index)=> (
              <div key={index} className="col-md-4 img-section   " onClick={()=> handleImg(list)}>
                <div className="images position-relative " >
                <img  src={list} className='w-100 rounded-3'  alt=""   />
                <div className="layout position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white "></i>
                </div>
                </div>
              </div>
            ))}
          
          </div>
          </div>
      </section>

      <section id='slide' className={`position-fixed top-0 start-0 end-0 bottom-0 ${display}`} onClick={exitPage}>
        <div className="container  ">
          <div className="row ">
          <div className="col-md-6 m-auto ">
          <img src={src} className='d-inline-block w-100'  alt="" onClick={stopprog} />
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
