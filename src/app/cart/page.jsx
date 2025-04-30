// app/cart/page.jsx
import CartContent from './CartContent';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export default async function CartPage() {
  const products = await getProducts();
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Navigation - can be rendered server-side */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="font-medium">Cart</span>
      </div>
      
      <CartContent availableProducts={products} />
    </div>
  );
}