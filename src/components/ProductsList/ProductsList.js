import React, {useContext} from 'react';
import {Context} from '../../context/context';
import axios from 'axios';

const getProducts = async () => {
  try {
    const {data} = await axios.get(
      'https://yalantis-react-school-api.yalantis.com/api/v1/products/',
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const ProductsList = () => {
  // const {products, setProducts} = useContext(Context);

  getProducts();

  // useEffect(()=>{

  // }, [])

  return <></>;
};
