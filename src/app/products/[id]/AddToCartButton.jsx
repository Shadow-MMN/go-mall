'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

export default function AddToCartButton({ product }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [quantityInCart, setQuantityInCart] = useState(0);

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('fakeStoreCart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
        
        // Check if this product is already in cart
        const existingItem = parsedCart.find(item => item.productId === product.id);
        if (existingItem) {
          setQuantityInCart(existingItem.quantity);
        }
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, [product.id]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fakeStoreCart', JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const existingItemIndex = prevCart.findIndex(item => item.productId === product.id);
      
      if (existingItemIndex !== -1) {
        // If it exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity
        };
        setQuantityInCart(updatedCart[existingItemIndex].quantity);
        return updatedCart;
      } else {
        // If it doesn't exist, add it with the selected quantity
        setQuantityInCart(quantity);
        return [...prevCart, { productId: product.id, quantity: quantity }];
      }
    });

    // Show "Added to cart" animation
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div>
      {quantityInCart > 0 && (
        <div className="mb-3 bg-blue-100 text-blue-800 px-3 py-2 rounded-md">
          {quantityInCart} {quantityInCart === 1 ? 'item' : 'items'} of this product in your cart
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Quantity selector */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <button 
            onClick={decreaseQuantity} 
            className="px-3 py-2 text-gray-600 hover:bg-gray-100"
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 text-center border-none focus:outline-none"
          />
          <button 
            onClick={increaseQuantity} 
            className="px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        
        {/* Add to cart button */}
        <button 
          onClick={addToCart}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 font-medium text-center text-white rounded-md ${
            isAdded ? 'bg-green-600' : 'bg-black hover:bg-gray-800'
          } transition-all duration-300`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5" />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}