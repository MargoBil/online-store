import React, {useContext, useCallback} from 'react';
import {onAddProductToOrders} from '../../helpers/onAddProductToOrders';
import {Context} from '../../context/context';
import {Basket} from '../Svg/Basket.js';
import styles from './AddButton.module.css';

export const AddButton = ({order}) => {
  const {setTotalCost, setOrders} = useContext(Context);
  const handlerClickBtn = useCallback(() => {
    onAddProductToOrders(order, setTotalCost, setOrders);
  }, [setOrders]);

  return (
    <button onClick={handlerClickBtn} className={styles.button}>
      <Basket size="35px" />
      <p className={styles.text}>BUY</p>
    </button>
  );
};
