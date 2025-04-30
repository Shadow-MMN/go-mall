'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton({ product, className = '' }) {
  const [isAdding, setIsAdding] = useState(false);

  const addToCart = () => {
    setIsAdding(true);
    
    try {
      // Get existing cart from localStorage
      const existingCart = localStorage.getItem('fakeStoreCart');
      const cart = existingCart ? JSON.parse(existingCart) : [];
      
      // Check if product already exists in cart
      const existingItemIndex = cart.findIndex(item => item.productId === product.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity if product already in cart
        cart[existingItemIndex].quantity += 1;
      } else {
        // Add new product to cart
        cart.push({
          productId: product.id,
          quantity: 1
        });
      }
      
      // Save updated cart to localStorage
      localStorage.setItem('fakeStoreCart', JSON.stringify(cart));
      
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
      notification.textContent = `${product.title} added to cart!`;
      document.body.appendChild(notification);
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
      
    } catch (error) {
      console.error("Failed to add to cart:", error);
      
      // Show error notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50';
      notification.textContent = 'Failed to add to cart. Please try again.';
      document.body.appendChild(notification);
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <button 
      onClick={addToCart}
      disabled={isAdding}
      className={`${className} flex items-center justify-center gap-x-2`}
    >
      {isAdding ? (
        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      ) : (
        <ShoppingCart className="w-5 h-5" />
      )}
      Add To Cart
    </button>
  );
}