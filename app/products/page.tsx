import Link from "next/link"
export default function ProductList() {
    const productId = 100;
  return (
    <>
      <h1 className="text-4xl font-bold">Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2><Link href="/products/3" replace>Product 3</Link></h2>
      <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
    </>
  );
}
