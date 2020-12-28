/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {Context} from './context';

export const ContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const context = {
    products,
    orders,
    totalCost,
    setProducts,
    setOrders,
    setTotalCost,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
};
