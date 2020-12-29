/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import {Context} from '../../context/context';
import {Basket} from '../Svg/Basket.js';
import styles from './AddButton.module.css';

export const AddButton = ({orders}) => {
  const {price, id, name} = orders;
  const {setTotalCost, setOrders} = useContext(Context);
  const handlerClick = () => {
    setTotalCost(prev => prev + price);
    setOrders(prev=>[...prev, {id, name, price}]);
  }

  return (
    <button onClick={handlerClick} className={styles.button}>
      <Basket size='35px' />
      <p className={styles.text}>BUY</p>
    </button>
  );
};
