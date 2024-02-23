import { createContext, useState } from "react";

const OrderContext = createContext([]);

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

  const addItem = (item) => {
    const itemIndex = order.findIndex((existingItem) => existingItem.id === item.id);
    setTotalOrder((pre) => pre + 1);
    if (itemIndex !== -1) {
      const updatedItems = [...order];
      updatedItems[itemIndex].frequency += 1;
      setOrder(updatedItems);
    } else {
      setOrder((prevItems) => [...prevItems, { ...item, frequency: 1 }]);
    }
  };
  
  const removeItem = (itemId) => {
    const itemIndex = order.findIndex((existingItem) => existingItem.id === itemId);
    setTotalOrder((pre) => pre - 1);
    
    if (itemIndex !== -1) {
      const updatedItems = [...order];
      if (updatedItems[itemIndex].frequency > 1) {
        updatedItems[itemIndex].frequency -= 1;
      } else {
        updatedItems.splice(itemIndex, 1);
      }
      setOrder(updatedItems);
    }
  };
  const clearOrderContext = () => {
    setOrder([]);
    setTotalOrder(0);
  }

  return (
    <OrderContext.Provider value={{ order, addItem, removeItem, clearOrderContext, totalOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderContextProvider };
