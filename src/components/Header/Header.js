import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../context/context';
import {Basket} from '../Svg/Basket';
import {ORDERS_ROUTE} from '../../helpers/routerConfig';
import styles from './Header.module.css';

export const Header = () => {
  const {totalCost} = useContext(Context);
  return (
    <header>
      <div className={styles.wrapper}>
        <Link className={styles.link} to={ORDERS_ROUTE}>
          <Basket size='40px'/>
        </Link>
        <span className={styles.cost}>total cost: {totalCost}</span>
      </div>
    </header>
  );
};
