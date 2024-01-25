import React, { useRef } from 'react'
import { createPortal } from "react-dom";
import CartModel from './CartModel'
import logoImg from '/images/logo2.png'

export default function Header() {
  const modalRef = useRef();
  function openHandle(){
    // console.log(modalRef.current)
    modalRef.current.showModal();
  }

  return (
    <div className='flex-box justify-between px-10 bg-blue-100'>
        <span className='flex-box'>
          <img src={logoImg} alt="logoImg" 
            className='w-20 h-20 mx-3'
          />
          <span className=''>FooD-CarT</span>
        </span>
        <button onClick={openHandle}>Cart</button>
        {createPortal(<CartModel ref={modalRef} />, document.getElementById('modal'))}
    </div>
  )
}
