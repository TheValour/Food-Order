import React, { forwardRef, useContext, useState } from 'react';
import './CartModel.css'
import { OrderContext } from '../context/OrderContext';
import OrderItem from './OrderItem';
import Form from './Form';

const CartModel = forwardRef(function CartModel(props, ref) {
  const {order} = useContext(OrderContext);
  const totalPrice = order.reduce((accumulator, currentValue) => accumulator + (currentValue.frequency * currentValue.price), 0).toFixed(2);
  const [orderFlag, setOrderFlag] = useState(false);

  function closeHandler() {
    if (ref && ref.current) {
      ref.current.close();
    }
  }
  
  function setFlagHandler() {
    if(totalPrice > 0) setOrderFlag(true);
  }
  
  return (
    <dialog 
      ref={ref} 
      className='result-modal'
    >
      {
      (orderFlag) ? <Form closeModal={closeHandler} setOrderFlag={setOrderFlag}/> :
      <>
        <div>
          {order.map((ele) => <OrderItem item={ele} key={ele.id}/>)}
          <span className='bg-blue-300 rounded block p-2 mx-2 font-medium'>Total Price :<span className=' font-normal'> {totalPrice} $</span></span>
        </div>
        <div className='flex-box justify-between'>
          <button onClick={closeHandler}  className='bg-red-200 p-2'>Close</button>
          <button onClick={setFlagHandler}>Order</button>
        </div>
      </>
      }

    </dialog>
  );
});

export default CartModel;
