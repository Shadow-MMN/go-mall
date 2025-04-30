// app/products/page.jsx
import ProductList from './ProductList';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';


async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  
  return( 
    <>
      <ProductList products={products} />  
      <div className='flex items-center justify-center mt-3 mb-6'>
        <Link
        href="/cart"
        className="flex items-center justify-center gap-3 bg-red-500 text-white px-6 py-2 rounded hover:bg-white hover:text-red-500 border border-transparent hover:border-red-500 transition-all duration-200"
        >
          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>View all Carts</span>
        </Link> 
      </div>     
    </>
  );
}