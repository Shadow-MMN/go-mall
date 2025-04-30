import Image from "next/image"
import Link from "next/link"
import WishlistButton from "../WishlistButton"
import { Eye, Star } from "lucide-react";
import AddToCartButton from "./AddToCartButton";

export default async function BestSellingProducts() {
  // Server-side fetch for products - getting all and then slicing
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: "no-store" // Optional: disable caching
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const allProducts = await res.json();
  
  // Get products 5-8 (index 4-7)
  const products = allProducts.slice(4, 8);

  return (
    <section className="px-4 sm:px-6 md:px-[135px] py-8 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="bg-red-400 rounded w-5 h-10"></div>
          <p className="text-red-500 font-semibold">This Month</p>
        </div>

        {/* Title and View All Button */}
        <div className="flex flex-col items-center justify-center text-center gap-4 sm:flex-row sm:justify-between sm:text-left">
          <h1 className="text-4xl font-bold whitespace-nowrap">Best Selling Products</h1>
          <Link href='/products' className="bg-red-500 text-white px-6 py-2 rounded hover:bg-white hover:text-red-500 hover:border-red-500 hover:border transition-all duration-200">
            View All Products
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-gray-100 relative">
            <div className="relative bg-white rounded-2xl p-3">
              {/* Action Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {/* Wishlist button */}
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
                className="mx-auto my-10 object-contain"
              />
            </div>

            {/* Product Details */}
            <article className="mt-4 text-left">
              <p className="text-base font-medium">{product.title}</p>

              {/* Price */}
              <div className="flex justify-start gap-2 mt-1">
                <p className="text-red-500 font-semibold">${product.price}</p>
                {product.price > 100 && (
                  <p className="text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</p>
                )}
              </div>

              {/* Rating */}
              <div className="flex justify-start items-center gap-2 mt-2">
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