import React, { useContext, useState } from 'react';
import axios from 'axios';

import { OrderContext } from '../context/OrderContext';

const Form = ({setOrderFlag, closeModal}) => {
  const {order, clearOrderContext} = useContext(OrderContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pincode: '',
    city: '',
    street: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOrder ={"order" :{"items" : {...order}, "customer" : {...formData}}}
    console.log(finalOrder);
    setFormData({ name: '', email: '', pincode: '', city: '', street: '' })
    handleFormSubmit(finalOrder);
    setOrderFlag(false)
    clearOrderContext();
    closeModal();
  };

  const handleFormSubmit = async (postData) => {
    try {
      const response = await axios.post('http://localhost:3000/orders', postData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="font-bold mb-2">User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-box"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-box"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pincode" className="input-label">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="input-box"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="input-label">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input-box"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="street" className="input-label">
            Street
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="input-box"
            required
          />
        </div>
        <div className='flex-box justify-between'>
            <button
            onClick={() => setOrderFlag(false)}
            className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
            >
            Back
            </button>
            <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
            Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
