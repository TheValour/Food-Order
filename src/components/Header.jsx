import React, { useContext, useRef } from 'react'
import { createPortal } from "react-dom";
import CartModel from './CartModel'
import logoImg from '/images/logo2.png'
import { OrderContext } from '../context/OrderContext';

export default function Header() {
  const {totalOrder} = useContext(OrderContext);
  const modalRef = useRef();
  function openHandle(){
    // console.log(modalRef.current)
    modalRef.current.showModal();
  }

  return (
    <div className='flex-box justify-between px-10 bg-black text-white opacity-90'>
        <span className='flex-box'>
          <img src={logoImg} alt="logoImg" 
            className='w-20 h-20 mx-2'
          />
          <span id='font-style' className=' text-2xl font-bold'>FOOD-CART</span>
        </span>
        <button onClick={openHandle} className='text-2xl'>Cart <sup className='text-yellow-300'>{totalOrder?"+" + totalOrder:""}</sup></button>
        {createPortal(<CartModel ref={modalRef} />, document.getElementById('modal'))}
    </div>
  )
}
