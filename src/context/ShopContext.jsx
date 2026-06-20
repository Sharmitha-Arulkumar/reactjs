import React, { createContext, useReducer } from 'react';

export const ShopContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingIndex > -1) {
        const newCart = [...state];
        newCart[existingIndex].quantity += 1;
        return newCart;
      }
   return [...state, { ...action.payload, quantity: 1 }];
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      ).filter(item => item.quantity > 0);
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};   
export const ShopProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <ShopContext.Provider value={{ cart, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};