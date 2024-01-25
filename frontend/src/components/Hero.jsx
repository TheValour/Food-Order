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
    <div>
        {items.map(((item) => <ItemCard item={item} key={item.id}/>))}
    </div>
  )
}
