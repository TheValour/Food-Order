import React, { forwardRef } from 'react';
import './CartModel.css'

const CartModel = forwardRef(function CartModel(props, ref) {
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
      CartModel
      <button onClick={closeHandler}  className='bg-red-200 p-2'>close</button>
    </dialog>
  );
});

export default CartModel;
