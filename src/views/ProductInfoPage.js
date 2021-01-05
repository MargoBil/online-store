import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getProductById} from '../helpers/fetchProducts';
import {Layout} from '../components/Layout/Layout';
import {ProductInfo} from '../components/ProductInfo/ProductInfo';

export const ProductInfoPage = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(productId).then(data => {
      setProduct({...data});
    });
  }, [productId]);
  
  return (
    <Layout>
      <ProductInfo product={product} />
    </Layout>
  );
};
