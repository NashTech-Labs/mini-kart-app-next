import { getAllProducts } from '../controllers/productController';

export const fetchProducts = async () => {
  try {
    return await getAllProducts();
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};
