'use client';

import { Eye, Star, X, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import WishlistProvider, { useWishlist } from './WishlistProvider';



export const metadata = {
  title: 'My Wishlist',
  description: 'View and manage your wishlist items',
};
// The actual content component that uses the wishlist data
function WishlistContent() {
  const { wishlistItems, removeFromWishlist, isLoading } = useWishlist();
  
  if (isLoading) {
    return(      
         <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
  }
  
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6 px-4 text-red-500">My Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Your wishlist is empty</p>
          <Link href="/products" className="text-red-500 inline-block mt-4 hover:underline">
            Browse products
          </Link>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition relative group pb-16"
            >
              {/* Top icons */}
              <div className="flex justify-end gap-2">
                {/* Remove from wishlist button */}
                <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow hover:bg-red-500 hover:text-white">
                  <button 
                    onClick={() => removeFromWishlist(product.id)}
                    aria-label="Remove from wishlist"
                  >
                    <X className="text-black w-5 h-5 hover:text-white" />
                  </button>
                </div>
                
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
                {/* Rating - if we stored rating info */}
                {product.rating && (
                  <div className="flex justify-start items-center gap-2 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="fill-amber-400 text-amber-400 w-5 h-5"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">({product.rating.count || 0})</p>
                  </div>
                )}
              </article>
              
              {/* Add to Cart button - always visible */}
              <button 
                className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-medium text-center opacity-100 transition-opacity duration-300 rounded-b-xl flex items-center justify-center cursor-pointer"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add To Cart
              </button>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

// Main page component that wraps the content with the provider
export default function WishlistPage() {
  return (
    <WishlistProvider>
      <WishlistContent />
    </WishlistProvider>
  );
}