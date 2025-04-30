'use client';

import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WishlistButton({ product }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  // Check if product is in wishlist on component mount
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const isProductInWishlist = wishlist.some(item => item.id === product.id);
      setIsInWishlist(isProductInWishlist);
    }
  }, [product.id]);

  const toggleWishlist = () => {
    // Get current wishlist from local storage
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter(item => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
    } else {
      // Add to wishlist
      const updatedWishlist = [...wishlist, {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        rating: product.rating // Include rating information for the wishlist page
      }];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(true);
    }
  };

  return (
    <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
      <button 
        onClick={toggleWishlist} 
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart 
          className={`w-5 h-5 transition-colors ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-black hover:fill-red-500'}`} 
        />
      </button>
    </div>
  );
}