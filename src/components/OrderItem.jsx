import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

export default function OrderItem({item}) {
    const {addItem, removeItem}= useContext(OrderContext);

  return (
    <div className='flex-box justify-between bg-slate-300 m-2 p-2'>
        <span >{item.name}</span>
        <span>{item.frequency * item.price}</span>
        <div>
            <button 
              onClick={() => addItem({name:item.name, id:item.id, price:item.price})}
              className='bg-green-500 px-2 rounded-md mx-2'
            >
                +
            </button>
            <span>{item.frequency}</span>
            <button 
              onClick={() => removeItem(item.id)}
              className='bg-green-500 px-2 rounded-md mx-2'
            >
                -
            </button>
        </div>
    </div>
  )
}
