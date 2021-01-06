import axios from 'axios';
axios.defaults.baseURL =
  'https://yalantis-react-school-api.yalantis.com/api/v1/';

export const getAllProducts = async page => {
  try {
    const {data} = await axios.get(`products?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getProductById = async id => {
  try {
    const {data} = await axios.get(`products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
