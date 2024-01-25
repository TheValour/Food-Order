import React from 'react'

export default function ItemCard({item}) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg" >
        <img className="w-full" src={item.image} alt={item.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-gray-700 text-base">{item.description}</p>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${item.price}</span>
        </div>
      </div>
    );
}

