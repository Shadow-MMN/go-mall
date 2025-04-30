// app/products/[id]/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';
import { notFound } from 'next/navigation';
import AddToCartButton from './AddToCartButton';

async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductDetailPage({ params }) {
  // Check if id is greater than 20, if so, trigger the not-found page
  const productId = parseInt(params.id);
  if (productId > 20) {
    notFound();
  }
  
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back to products link */}
      <Link 
        href="/products" 
        className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="object-contain max-h-[400px]"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          
          {/* Category */}
          <div className="mt-2 inline-block">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(product.rating?.rate || 0) 
                    ? "fill-amber-400 text-amber-400" 
                    : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              {product.rating?.rate || 0} ({product.rating?.count || 0} reviews)
            </p>
          </div>
          
          {/* Price */}
          <div className="flex items-center gap-3 mt-4">
            <p className="text-2xl font-bold text-red-500">${product.price}</p>
            <p className="text-gray-500 line-through text-lg">${(product.price * 1.2).toFixed(2)}</p>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
              20% OFF
            </span>
          </div>
          
          {/* Description */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          {/* Add to cart button */}
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
          
          {/* Additional info */}
          <div className="mt-8 border-t pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-gray-500">Availability</h3>
                <p className="font-medium">In Stock</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Shipping</h3>
                <p className="font-medium">Free Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}