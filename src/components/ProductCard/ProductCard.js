import React from 'react';
import {useHistory} from 'react-router-dom';
import {AddButton} from '../AddButton/AddButton';
import {PRODUCTS_LIST_ROUTE} from '../../helpers/routerConfig';
import styles from './ProductCard.module.css';

export const ProductCard = ({item}) => {
  const {name, origin, price, id} = item;
  const history = useHistory();
  const handlerClick = () => history.push(`${PRODUCTS_LIST_ROUTE}/${id}`);

  return (
    <li style={{height: '150px', width: '200px'}} className={styles.item}>
      <div onClick={handlerClick}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.origin}>
          ORIGIN: <span>{origin.toUpperCase()}</span>
        </p>
        <span className={styles.price}>
          PRICE: <span>{price}</span>
        </span>
      </div>
      <div className={styles.btnBox}>
        <AddButton order={item} />
      </div>
    </li>
  );
};
