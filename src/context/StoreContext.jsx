import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // using an object to track cart items

  // Add to cart function
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemId = item._id; // Use _id from food_list

      // If the item is already in the cart, increment the quantity
      if (prevItems[itemId]) {
        return {
          ...prevItems,
          [itemId]: {
            ...prevItems[itemId],
            quantity: prevItems[itemId].quantity + 1,
          },
        };
      }

      // If the item is not in the cart, add it with quantity 1
      return {
        ...prevItems,
        [itemId]: { ...item, quantity: 1 },
      };
    });
  };

  // Remove from cart function
  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const itemId = item._id;

      // If the item quantity is 1, remove the item completely
      if (prevItems[itemId].quantity === 1) {
        const { [itemId]: _, ...remainingItems } = prevItems; // Remove the item from the cart
        return remainingItems;
      }

      // Otherwise, decrement the quantity
      return {
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          quantity: prevItems[itemId].quantity - 1,
        },
      };
    });
  };

  useEffect(() => {
    console.log(cartItems); // To debug and check cart items
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
