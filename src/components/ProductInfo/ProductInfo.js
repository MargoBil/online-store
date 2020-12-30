import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getProductById} from '../../helpers/fetchProducts';
import {AddButton} from '../AddButton/AddButton';

export const ProductInfo = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(productId).then(data => {
      setProduct({...data});
    });
  }, [productId]);
  const {name, origin, price} = product;
  return (
    <div>
      <h3>
        <span>name of product: </span>
        {name}
      </h3>
      <p>
        <span>origin: </span>
        {origin}
      </p>
      <span>origin: {price}</span>
      <div>
        <AddButton orders={product} />
      </div>
    </div>
  );
};
