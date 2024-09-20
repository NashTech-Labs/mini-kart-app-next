"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { removeFromCart } from "../../redux/cartSlice";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-gray-100 rounded">
      {cart.items.map((item) => (
        <div key={item.id} className="flex justify-between items-center p-2">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.totalPrice}</p>
          </div>
          <button
            onClick={() =>
              dispatch(removeFromCart({ id: item.id, price: item.price }))
            }
            className="bg-red-500 text-white py-1 px-4 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <h3 className="text-xl font-bold mt-4">
        Total Price: ${cart.totalPrice}
      </h3>
    </div>
  );
}
