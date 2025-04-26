import Image from "next/image"
import { Heart, Eye, Star  } from "lucide-react";
import Link from "next/link";

export default function BestSellingProducts(){
    return(
        <section className="px-4 sm:px-6 md:px-[135px] py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                <div className="bg-red-400 rounded w-5 h-10"></div>
                <p className="text-red-500 font-semibold">This Month</p>
                </div>
                {/*The flex in row which will have a space between */}
                <div className="flex flex-col items-center justify-center text-center gap-4 sm:flex-row sm:justify-between sm:text-left">
                    <h1 className="text-4xl font-bold whitespace-nowrap">Best Selling Products</h1>
                    <Link href='/products' className="bg-red-500 text-white px-6 py-2 rounded hover:bg-white hover:text-red-500 hover:border-red-500 hover:border transition-all duration-200">
                        View All Products
                    </Link>
                </div>
            </div>
            <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
                <div className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-white">
                    <div className="relative bg-gray-100 rounded-2xl p-3">
                       
                        {/* Action Icons */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                            <Heart className="text-black hover:fill-red-500 w-5 h-5" />
                        </div>
                        <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                            <Eye className="text-black w-5 h-5" />
                        </div>
                        </div>

                        {/* Product Image */}
                        <Image
                        src="/sweater.png"
                        alt="The north coat"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left">
                        <p className="text-base font-medium">The north coat</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$260</p>
                        <p className="text-gray-500 line-through">$360</p>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-start items-center gap-2 mt-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">(65)</p>
                        </div>
                    </article>
                </div>
                <div className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-white">
                    <div className="relative bg-gray-100 rounded-2xl p-3">
                        {/* Discount Badge */}

                        {/* Action Icons */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                            <Heart className="text-black hover:fill-red-500 w-5 h-5" />
                        </div>
                        <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                            <Eye className="text-black w-5 h-5" />
                        </div>
                        </div>

                        {/* Product Image */}
                        <Image
                        src="/bag.png"
                        alt="Gucci duffle bag"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left">
                        <p className="text-base font-medium">Gucci duffle bag</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$960</p>
                        <p className="text-gray-500 line-through">$1160</p>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-start items-center gap-2 mt-2">
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                            <Star className="fill-gray-500 text-gray-500 w-5 h-5"/>
                        </div>
                        <p className="text-sm text-gray-500">(75)</p>
                        </div>
                    </article>
                </div>
                <div className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-white">
                    <div className="relative bg-gray-100 rounded-2xl p-3">
                        {/* Discount Badge */}


                        {/* Action Icons */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                            <Heart className="text-black hover:fill-red-500 w-5 h-5" />
                        </div>
                        <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                            <Eye className="text-black w-5 h-5" />
                        </div>
                        </div>

                        {/* Product Image */}
                        <Image
                        src="/cooler.png"
                        alt="RGB liquid CPU Cooler"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left">
                        <p className="text-base font-medium">RGB liquid CPU Cooler</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$160</p>
                        <p className="text-gray-500 line-through">$170</p>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-start items-center gap-2 mt-2">
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                            <Star className="fill-gray-500 text-gray-500 w-5 h-5"/>
                        </div>
                        <p className="text-sm text-gray-500">(88)</p>
                        </div>
                    </article>
                </div>
                <div className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-white">
                    <div className="relative bg-gray-100 rounded-2xl p-3">
                        {/* Discount Badge */}


                        {/* Action Icons */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                            <Heart className="text-black hover:fill-red-500 w-5 h-5" />
                        </div>
                        <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow">
                            <Eye className="text-black w-5 h-5" />
                        </div>
                        </div>

                        {/* Product Image */}
                        <Image
                        src="/bookshelf.png"
                        alt="Small BookSelf"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left">
                        <p className="text-base font-medium">Small BookSelf</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$360</p>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-start items-center gap-2 mt-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">(65)</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}