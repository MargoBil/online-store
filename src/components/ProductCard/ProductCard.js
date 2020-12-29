import React from 'react';
import {useHistory} from 'react-router-dom';
import {AddButton} from '../AddButton/AddButton';
import {PRODUCT_INFO_ROUTE} from '../../helpers/routerConfig';
import styles from './ProductCard.module.css';

/* eslint-disable react/prop-types */

export const ProductCard = ({item}) => {
  const {name, origin, price} = item;
  const history = useHistory();
  const handlerClick = () =>history.push(PRODUCT_INFO_ROUTE);
  return (
    <li style={{height: '150px', width: '200px'}} className={styles.item}>
      <div onClick={handlerClick}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.origin}>Origin: {origin}</p>
        <span className={styles.price}>{price}</span>
      </div>
      <div className={styles.btnBox}>
        <AddButton orders={item} />
      </div>
    </li>
  );
};
