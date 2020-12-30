/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import {Context} from '../../context/context';
import {Basket} from '../Svg/Basket.js';
import styles from './AddButton.module.css';

export const AddButton = ({orders}) => {
  const {price, id, name} = orders;
  const {setTotalCost, setOrders} = useContext(Context);
  const ordersItemSсhema = {
    id: id,
    name: name,
    cost: price,
    quantity: 0
  };

  const handlerClick = () => {
    setTotalCost(prev => prev + price);
    setOrders(prev=>{
      ordersItemSсhema.quantity += 1;
      const isExistSameOrder = prev.find(item => item.id === id);
      
      if(isExistSameOrder !== undefined) {
        isExistSameOrder.quantity +=1;
        isExistSameOrder.cost = isExistSameOrder.cost * 2;
        return [...prev];
      }
      return [...prev, ordersItemSсhema];
    });
  }

  return (
    <button onClick={handlerClick} className={styles.button}>
      <Basket size='35px' />
      <p className={styles.text}>BUY</p>
    </button>
  );
};
