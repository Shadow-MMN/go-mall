// app/products/ProductList.jsx
'use client';

import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Star,ShoppingCart  } from 'lucide-react';
import WishlistButton from './WishlistButton';

export default function ProductList({ products }) {
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState(null);

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('fakeStoreCart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fakeStoreCart', JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const existingItem = prevCart.find(item => item.productId === product.id);
      
      if (existingItem) {
        // If it exists, increase quantity
        return prevCart.map(item => 
          item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it doesn't exist, add it with quantity 1
        return [...prevCart, { productId: product.id, quantity: 1 }];
      }
    });

    // Show "Added to cart" animation for this product
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 1500);
  };

  // Get quantity of product in cart
  const getQuantityInCart = (productId) => {
    const item = cart.find(item => item.productId === productId);
    return item ? item.quantity : 0;
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition relative group"
          >
            {/* Top icons */}
            <div className="flex justify-end gap-2">
              {/* Wishlist heart icon - client component */}
              <WishlistButton product={product} />
              
              {/* View product icon */}
              <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                <Link href={`/products/${product.id}`}>
                  <Eye className="text-black w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={172}
              height={152}
              className="mx-auto my-10 object-contain h-[152px]"
            />
            
            {/* Product Details */}
            <article className="mt-4 text-left">
              <p className="text-base font-medium line-clamp-2">{product.title}</p>
              {/* Price */}
              <div className="flex justify-start gap-2 mt-1">
                <p className="text-red-500 font-semibold">${product.price}</p>
                <p className="text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</p>
              </div>
              {/* Rating */}
              <div className="flex justify-start items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-amber-400 text-amber-400 w-5 h-5"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">({product.rating?.count || 0})</p>
              </div>
              
              {/* Cart quantity indicator */}
              {getQuantityInCart(product.id) > 0 && (
                <div className="mt-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm inline-block">
                  {getQuantityInCart(product.id)} in cart
                </div>
              )}
            </article>
            
            {/* Add to Cart button */}
            <button 
              className={`absolute bottom-0 left-0 right-0 py-3 px-4 font-medium text-center transition-all duration-300 rounded-b-xl cursor-pointer flex items-center justify-center gap-x-2
                ${addedToCart === product.id 
                  ? 'bg-green-600 text-white opacity-100' 
                  : 'bg-black text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100'}`}
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="w-5 h-5" />
              {addedToCart === product.id ? 'Added To Cart!' : 'Add To Cart'}
            </button>
          </div>
        ))}
      </section>
      
      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <Link href="/cart">
          <div className="fixed bottom-8 right-8 bg-black text-white rounded-full p-4 shadow-lg flex items-center gap-2 z-50 hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span className="font-medium">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>
        </Link>
      )}
    </>
  );
}