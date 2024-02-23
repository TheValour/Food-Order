import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';

import { db } from '../firebase/firebase';
import { doc, getDoc} from 'firebase/firestore';


export default function Hero() {
  const [items, setItems] = useState([]);
  
  useEffect(()=> {
    async function putData() {
      const docRef = doc(db, "itemsList", "data");
      const docSnap = await getDoc(docRef);
      setItems(docSnap.data().items)
    }
    putData();
  }, []);

  return (
    <div className='p-6 bg-gray-200 grid grid-cols-3 gap-2'>
      {items.map(((item) => <ItemCard item={item} key={item.id}/>))}
    </div>
  )
}
