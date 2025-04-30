// app/cart/CartContent.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartContent({ availableProducts }) {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  // Load cart from localStorage on component mount
  useEffect(() => {
    setIsLoading(true);
    
    try {
      const savedCart = localStorage.getItem('fakeStoreCart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('fakeStoreCart', JSON.stringify(cart));
    }
  }, [cart, isLoading]);

  useEffect(() => {
    if (availableProducts && availableProducts.length > 0) {
      localStorage.setItem('fakeStoreProducts', JSON.stringify(availableProducts));
    }
  }, [availableProducts]);
  // Get full product details from the product ID
  const getProductDetails = (productId) => {
    return availableProducts.find(product => product.id === productId) || null;
  };

  // Update quantity of an item
  const updateQuantity = (productId, quantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.productId === productId ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  // Remove an item from the cart
  const removeItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId));
  };

  // Apply coupon code
  const applyCoupon = () => {
    if (!couponCode.trim()) return;
    
    // For demo purposes, just show an alert
    alert(`Coupon ${couponCode} applied!`);
    setCouponCode('');
  };

  // Calculate subtotal for a single item
  const calculateSubtotal = (item) => {
    const product = getProductDetails(item.productId);
    return product ? product.price * item.quantity : 0;
  };

  // Calculate total cost of all items
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const product = getProductDetails(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  // Update cart
  const updateCart = () => {
    alert('Cart updated successfully!');
  };

  // Proceed to checkout
  const proceedToCheckout = () => {
    router.push('/cart/checkout')
  };

  if (isLoading) {
    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
  }

  return (
    <>
      {cart.length === 0 ? (
        <div className="text-center p-8">
          <p className="mb-4">Your cart is empty</p>
          <Link href="/products">
            <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
              Return To Shop
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Headers */}
          <div className="grid grid-cols-4 gap-4 border-b pb-2 mb-4 font-medium">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div className="text-right">Subtotal</div>
          </div>
          
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.map(item => {
              const product = getProductDetails(item.productId);
              if (!product) return null; // Skip if product not found
              
              return (
                <div key={item.productId} className="grid grid-cols-4 gap-4 items-center border-b pb-6">
                  <div className="flex items-center space-x-4">
                    <button onClick={() => removeItem(item.productId)} className="text-red-500">
                      <span className="text-red-500 text-xl">×</span>
                    </button>
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image 
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="truncate">{product.title}</span>
                  </div>
                  <div>${product.price.toFixed(2)}</div>
                  <div>
                    <select 
                      value={item.quantity} 
                      onChange={(e) => updateQuantity(item.productId, e.target.value)}
                      className="border p-2 w-20"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text-right">${(product.price * item.quantity).toFixed(2)}</div>
                </div>
              );
            })}
          </div>
          
          {/* Cart Actions */}
          <div className="flex justify-between mt-8">
            <div>
              <Link href="/products">
                <button className="border border-gray-300 px-4 py-2">
                  Return To Shop
                </button>
              </Link>
            </div>
            <div>
              <button 
                className="border border-gray-300 px-4 py-2"
                onClick={updateCart}
              >
                Update Cart
              </button>
            </div>
          </div>
          
          {/* Coupon and Cart Total */}
          <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
            <div className="flex w-full md:w-1/2">
              <input 
                type="text" 
                placeholder="Coupon Code" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border p-2 w-full md:w-64"
              />
              <button 
                className="bg-red-500 text-white px-4 py-2"
                onClick={applyCoupon}
              >
                Apply Coupon
              </button>
            </div>
            
            <div className="w-full md:w-1/2 border p-4">
              <h2 className="text-lg font-medium mb-4">Cart Total</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-medium mt-4 pt-4 border-t">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button 
                className="bg-red-500 text-white w-full py-2 mt-4 cursor-pointer"
                onClick={proceedToCheckout}
              >
                Process to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}