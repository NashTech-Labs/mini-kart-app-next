"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { IProduct } from "../../models/Product";

interface ProductListProps {
  products: IProduct[];
}

export default function ProductList({ products }: ProductListProps) {
  const dispatch = useDispatch();

  const handleAddToCart = (product: IProduct) => {
    dispatch(
      addToCart({ id: product._id, name: product.name, price: product.price })
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded shadow">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p>{product.description}</p>
          <p className="text-lg font-bold">Price: ${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
