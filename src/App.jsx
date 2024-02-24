import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { OrderContextProvider } from './context/OrderContext'
import Footer from './components/Footer'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


export default function App() {
  return (
    <OrderContextProvider>
      <div >
        <Header/>
        <Hero/>
      </div>
      <ToastContainer />
      <Footer/>
    </OrderContextProvider>
  )
}
