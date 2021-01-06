import {getAllProducts} from './fetchProducts';

export const onGetAllProducts = (scroll, page, setTotalPages, setProducts) => {
  getAllProducts(page).then(({perPage, totalItems, items}) => {
    const total = totalItems / perPage;
    setTotalPages(total);
    if (page > 1) {
      setProducts(prev => [...prev, ...items]);
    } else {
      setProducts([...items]);
    }
    window.scrollTo({
      top: scroll,
      behavior: 'smooth',
    });
  });
};
