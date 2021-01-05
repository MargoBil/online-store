import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../context/context';
import {onGetAllProducts} from '../helpers/onGetAllProducts';
import {Layout} from '../components/Layout/Layout';
import {ProductsList} from '../components/ProductsList/ProductsList';

export const ProductsListPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const {products, setProducts} = useContext(Context);
  const headerHeight = 128;
  const scroll = document.documentElement.offsetHeight - headerHeight;

  useEffect(() => {
    onGetAllProducts(scroll, page, setTotalPages, setProducts);
  }, [page]);

  return (
    <Layout>
      <ProductsList
        setPage={setPage}
        totalPages={totalPages}
        products={products}
        page={page}
      />
    </Layout>
  );
};
