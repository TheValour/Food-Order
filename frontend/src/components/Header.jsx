import React from 'react'
import Cart from './Cart'
import logoImg from '/images/logo.jpg'

export default function Header() {
  return (
    <div className='flex-box justify-between px-10 bg-blue-100'>
        <span className='flex-box'>
            <img src={logoImg} alt="logoImg" 
                className='w-20 h-20 mx-3'
            />
            <span className=''>FooD-CarT</span>
        </span>
        <Cart/>
    </div>
  )
}
