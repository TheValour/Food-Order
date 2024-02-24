import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext';
import { toast } from 'react-toastify';

export default function ItemCard({item}) {
  const {addItem} = useContext(OrderContext);
  function onClickHandler() {
    addItem({name:item.name, id:item.id, price:item.price});
    toast('Added to cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md" >
      <img className="w-full" src={item.image} alt={item.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 py-4 flex-box justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2">
            ${item.price}
          </span>
          
          <button className='bg-green-500 text-white p-2 rounded-lg' 
            onClick={onClickHandler}
          >
            Add to Cart
          </button>
      </div>
    </div>
  );
}

