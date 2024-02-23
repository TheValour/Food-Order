import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { OrderContextProvider } from './context/OrderContext'
import Footer from './components/Footer'

export default function App() {
  return (
    <OrderContextProvider>
      <button onClick={handleSuccess}>Click</button>
      <div >
        <Header/>
        <Hero/>
      </div>
      <Footer/>
    </OrderContextProvider>
  )
}
