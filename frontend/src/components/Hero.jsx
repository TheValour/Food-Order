import React, { useEffect, useState } from 'react'
import axios from "axios";
import ItemCard from './ItemCard';

export default function Hero() {
    const [items, setItems] = useState([]);

    useEffect(()=> {
      axios.get('http://localhost:3000/meals').then((response) => {
        setItems(response.data);
      });
    }, []);

  return (
    <div className='p-6 bg-gray-200 grid grid-cols-3 gap-2'>
      {items.map(((item) => <ItemCard item={item} key={item.id}/>))}
    </div>
  )
}
