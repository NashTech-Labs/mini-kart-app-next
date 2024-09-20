"use client"; // Client-side component because it uses Redux hooks

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-white shadow py-4 px-8 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>Mini Cart App</Link>
        </h1>
        <Link href="/cart">
          <div className="relative inline-block">
            <span className="bg-blue-500 text-white px-4 py-2 rounded">
              View Cart
            </span>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-[-10px] bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
