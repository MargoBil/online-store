import axios from 'axios';
const baseUrl = 'https://yalantis-react-school-api.yalantis.com/api/v1/';

export const getAllProducts = async (page) => {
  try {
    const {data} = await axios.get(`${baseUrl}products?page=${page}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
