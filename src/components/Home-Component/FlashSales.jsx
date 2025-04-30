import Image from "next/image";
import Link from "next/link";
import { Eye, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import WishlistButton from "../WishlistButton";
import AddToCartButton from "./AddToCartButton";

export default async function FlashSales() {
  const res = await fetch('https://fakestoreapi.com/products?limit=4', {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await res.json();

  return (
    <section className="px-4 sm:px-6 md:px-[135px] py-8 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="bg-red-400 rounded w-5 h-10"></div>
          <p className="text-red-500 font-semibold">Today's</p>
        </div>

        <div className="flex justify-between">
          {/* Title and Timer */}
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <h1 className="text-4xl font-bold whitespace-nowrap">Flash Sales</h1>
              <div className="flex">
                <CountdownTimer />
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="md:flex items-center gap-3 hidden">
            {/* Previous Arrow */}
            <div className="rounded-full p-[11px] w-[46px] bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-[24px] h-[24px] text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 17.25L3 12m0 0l3.75-5.25M3 12h18" />
              </svg>
            </div>
            {/* Next Arrow */}
            <div className="rounded-full p-[11px] w-[46px] bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-[24px] h-[24px] text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-gray-100 group relative">
            <div className="relative bg-white rounded-2xl p-3">
              {/* Discount Badge */}
              <p className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-xl">
                -20%
              </p>

              {/* Action Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {/* Wishlist button - client component */}
                <WishlistButton product={product} />
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
                className="mx-auto my-10 object-contain bg-gray-100"
              />
            </div>

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
                  {Array.from({ length: Math.round(product.rating.rate) }).map((_, i) => (
                    <Star key={i} className="fill-amber-400 text-amber-400 w-5 h-5" />
                  ))}
                  {Array.from({ length: 5 - Math.round(product.rating.rate) }).map((_, i) => (
                    <Star key={i + 5} className="fill-gray-500 text-gray-500 w-5 h-5" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">({product.rating.count})</p>
              </div>
            </article>

            {/* Add to Cart button - Now using client component */}
            <AddToCartButton
              product={product}
              className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-medium text-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* View All Products */}
      <div className="flex items-center justify-center">
        <Link href="/products" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-white hover:text-red-500 hover:border-red-500 hover:border transition-all duration-200">
          View All Products
        </Link>
      </div>
    </section>
  );
}