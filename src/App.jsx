import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { OrderContextProvider } from './context/OrderContext'

export default function App() {
  return (
    <OrderContextProvider>
      <div >
        <Header/>
        <Hero/>
      </div>
    </OrderContextProvider>
  )
}
