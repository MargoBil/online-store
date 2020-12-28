import React from 'react';
import {Link} from 'react-router-dom';
import {Basket} from '../Svg/Basket';
import styles from './Orders.module.css';

export const Orders = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <Link className={styles.link} to="/orders">
          <Basket />
        </Link>
        <span className={styles.cost}>total cost: 700</span>
      </div>
    </header>
  );
};
