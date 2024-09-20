import { NextResponse } from "next/server";
import connectMongo from "../../../lib/mongodb";
import { fetchProducts } from "../../../services/productService";

export async function GET() {
  await connectMongo();

  try {
    const products = await fetchProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
