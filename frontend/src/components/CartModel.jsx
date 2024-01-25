import React, { forwardRef, useContext } from 'react';
import './CartModel.css'
import { OrderContext } from '../context/OrderContext';
import OrderItem from './OrderItem';

const CartModel = forwardRef(function CartModel(props, ref) {
  const {order} = useContext(OrderContext);
  const totalPrice = order.reduce((accumulator, currentValue) => accumulator + (currentValue.frequency * currentValue.price), 0);

  function closeHandler() {
    if (ref && ref.current) {
      ref.current.close();
    }
  }

  return (
    <dialog 
      ref={ref} 
      className='w-1/2 h-1/2 result-modal'
    >
      <div>
        {order.map((ele) => <OrderItem item={ele}/>)}
        <span className='bg-blue-300 w-full block p-2'>Total Price : {totalPrice}</span>
      </div>
      <div className='flex-box justify-between'>
        <button onClick={closeHandler}  className='bg-red-200 p-2'>close</button>
        <button className='bg-red-200 p-2'>Order</button>
      </div>
    </dialog>
  );
});

export default CartModel;
