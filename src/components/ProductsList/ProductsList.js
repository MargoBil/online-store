import React, {useCallback} from 'react';
import {onAddNextPage} from '../../helpers/onAddNextPage';
import {ProductCard} from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css';

export const ProductsList = ({totalPages, page, setPage, products}) => {
  const handlerButton = useCallback(() => {
    onAddNextPage(totalPages, page, setPage);
  }, [totalPages]);

  return (
    <div>
      <ul className={styles.list}>
        {!!products.length !== 0 &&
          products.map(item => {
            return <ProductCard key={item.id} item={item} />;
          })}
      </ul>
      {page !== totalPages && (
        <button className={styles.button} onClick={handlerButton}>
          LOAD MORE
        </button>
      )}
    </div>
  );
};
