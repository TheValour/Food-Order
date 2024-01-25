import { createContext, useState } from "react";

const OrderContext = createContext([]);

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addItem = (item) => {
    const itemIndex = order.findIndex((existingItem) => existingItem.id === item.id);

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

  return (
    <OrderContext.Provider value={{ order, addItem, removeItem }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderContextProvider };
