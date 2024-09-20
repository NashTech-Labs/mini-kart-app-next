import ProductList from "./components/ProductList";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const products = await res.json();

  return (
    <div className="container mx-auto">
      <ProductList products={products} />
    </div>
  );
}
