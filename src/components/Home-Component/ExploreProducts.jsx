import Image from "next/image"
import Link from "next/link"
import { Eye, Star } from "lucide-react";
import WishlistButton from "../WishlistButton";
import AddToCartButton from "./AddToCartButton";

export default async function ExploreOurProducts() {
  // Server-side fetch for all products
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: "no-store" // Optional: disable caching
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const allProducts = await res.json();
  
  // Get products 9-16 (index 8-15)
  const products = allProducts.slice(8, 16);

  return (
    <section className="px-4 sm:px-6 md:px-[135px] py-8 flex flex-col gap-8">
      {/* Top Heading Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="bg-red-400 rounded w-5 h-10"></div>
          <p className="text-red-500 font-semibold">Our Products</p>
        </div>

        {/* Heading + Button + Arrows */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <h1 className="text-4xl font-bold whitespace-nowrap">Explore Our Products</h1>
            </div>
          </div>

          {/* Button + Arrows */}
          <div className="flex items-center gap-4">
            <Link href='/products' className="bg-red-500 text-white px-6 py-2 rounded hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 hidden md:block">
              View All Products
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <div className="rounded-full p-[11px] w-[46px] bg-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-[24px] h-[24px] text-black"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 17.25L3 12m0 0l3.75-5.25M3 12h18" />
                </svg>
              </div>
              <div className="rounded-full p-[11px] w-[46px] bg-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-[24px] h-[24px] text-black"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Row - Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-gray-100 relative group">
            <div className="relative bg-white rounded-2xl p-3">
              {product.id % 3 === 0 && (
                <p className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-xl">
                  -30%
                </p>
              )}
              {/* Action Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <WishlistButton product={product} />
                <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                  <Eye className="text-black w-5 h-5" />
                </div>
              </div>

              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.title}
                width={172}
                height={152}
                className="mx-auto my-10 object-contain"
              />
            </div>

            {/* Product Details */}
            <article className="mt-4 text-left flex flex-col gap-2">
              <p className="text-base font-medium">{product.title}</p>
              <div className="flex justify-start gap-2 mt-1">
                <p className="text-red-500 font-semibold">${product.price}</p>
                <div className="flex">
                  {Array.from({ length: Math.round(product.rating.rate) }, (_, i) => (
                    <Star key={i} className="fill-amber-400 text-amber-400 w-5 h-5" />
                  ))}
                  {Array.from({ length: 5 - Math.round(product.rating.rate) }, (_, i) => (
                    <Star key={i + 5} className="fill-gray-500 text-gray-500 w-5 h-5" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">({product.rating.count})</p>
              </div>
            </article>

            {/* Add to Cart Button - Now using client component */}
            <AddToCartButton 
              product={product} 
              className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-medium text-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Second Row - Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
        {products.slice(4, 8).map((product) => (
          <div key={product.id} className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-gray-100 relative group">
            <div className="relative bg-white rounded-2xl p-3">
              {product.id % 2 === 0 && (
                <p className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-xl">
                  New
                </p>
              )}
              {/* Action Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <WishlistButton product={product} />
                <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                  <Eye className="text-black w-5 h-5" />
                </div>
              </div>

              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.title}
                width={172}
                height={152}
                className="mx-auto my-10 object-contain"
              />
            </div>

            {/* Product Details */}
            <article className="mt-4 text-left flex flex-col gap-2">
              <p className="text-base font-medium">{product.title}</p>
              <div className="flex justify-start gap-2 mt-1">
                <p className="text-red-500 font-semibold">${product.price}</p>
                <div className="flex">
                  {Array.from({ length: Math.round(product.rating.rate) }, (_, i) => (
                    <Star key={i} className="fill-amber-400 text-amber-400 w-5 h-5" />
                  ))}
                  {Array.from({ length: 5 - Math.round(product.rating.rate) }, (_, i) => (
                    <Star key={i + 5} className="fill-gray-500 text-gray-500 w-5 h-5" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">({product.rating.count})</p>
              </div>
            </article>

            {/* Add to Cart Button - Now using client component */}
            <AddToCartButton 
              product={product} 
              className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-medium text-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}