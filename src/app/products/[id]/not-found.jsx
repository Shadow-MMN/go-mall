// app/products/[id]/not-found.jsx
import Link from 'next/link';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-gray-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        
        <p className="text-gray-600 mb-8">
          Oops! The product you're looking for doesn't exist in our catalog.
          Our store only carries products with IDs from 1 to 20.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}