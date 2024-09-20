import Product, { IProduct } from '../models/Product';

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};
