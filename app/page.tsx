import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
      <Link href="/products">Products</Link>
    </>
  );
}
