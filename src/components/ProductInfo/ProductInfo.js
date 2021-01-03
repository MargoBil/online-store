import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getProductById} from '../../helpers/fetchProducts';
import {AddButton} from '../AddButton/AddButton';
import styles from './ProductInfo.module.css';

export const ProductInfo = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductById(productId).then(data => {
      setProduct({...data});
    });
  }, [productId]);
  
  const {name, origin, price} = product;
  const isProduct = Object.keys(product).length > 0;
  return (
    <>
      {isProduct && (
        <div className={styles.productBox}>
          <h3 className={styles.headerProductName}>
            <span className={styles.nameProduct}>NAME OF PRODUCT: </span>
            {name}
          </h3>
          <p className={styles.originProductText}>
            <span className={styles.originProduct}>ORIGIN: </span>
            {origin.toUpperCase()}
          </p>
          <span className={styles.priceProductCount}>
            <span className={styles.priceProduct}>PRICE: </span>
            {price}
          </span>
          <div className={styles.btnBox}>
            <AddButton order={product} />
          </div>
        </div>
      )}
    </>
  );
};
