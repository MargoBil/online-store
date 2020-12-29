import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../context/context';
import {getAllProducts} from '../../helpers/fetchProducts';
import {ProductCard} from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css';

export const ProductsList = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const {products, setProducts} = useContext(Context);
  const headerHeight = 119;
  const scroll = document.documentElement.offsetHeight - headerHeight;
  useEffect(() => {
    getAllProducts(page).then(({perPage, totalItems, items}) => {
      const total = totalItems / perPage;
      setTotalPages(total);
      setProducts(prev => [...prev, ...items]);
      window.scrollTo({
        top: scroll,
        behavior: 'smooth',
      });
    });
  }, [page]);

  const handlerButton = () => {
    if (totalPages > page) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div>
      <ul className={styles.list}>
        {!!products.length !== 0 &&
          products.map(item => {
            return <ProductCard key={item.id} item={item}/>;
          })}
      </ul>
      {page !== totalPages && <button className={styles.button} onClick={handlerButton}>
        LOAD MORE
      </button>}
    </div>
  );
};
