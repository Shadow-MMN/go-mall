import Image from "next/image"
import { Heart, Eye, Star  } from "lucide-react";
import Link from "next/link";

export default function ExploreOurProducts(){
    return(
        <section className="px-4 sm:px-6 md:px-[135px] py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                <div className="bg-red-400 rounded w-5 h-10"></div>
                <p className="text-red-500 font-semibold">Our Products</p>
                </div>
                {/*The flex in row which will have a space between */}
                <div className="flex justify-between">
                    {/*The first section with the falsh sales and time remaining */}
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <div className="flex items-center justify-center gap-6 flex-wrap">
                            <h1 className="text-4xl font-bold whitespace-nowrap">Explore Our Products</h1>
                        </div>
                    </div>

                        {/*The two arrow for left and right */}
                    <div className="md:flex items-center gap-3 hidden">
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
            {/* First row */}
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
                        src="/dog-food.png"
                        alt="Breed Dry Dog Food"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left flex flex-col gap-2">
                        <p className="text-base font-medium">Breed Dry Dog Food</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                            <p className="text-red-500 font-semibold">$100</p>
                            <div className="flex">
                                {[...Array(3)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="fill-amber-400 text-amber-400 w-5 h-5"
                                />
                                ))}
                                {[...Array(2)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="fill-gray-500 text-gray-500 w-5 h-5"
                                />
                                ))}
                            </div>
                            <p className="text-sm text-gray-500">(35)</p>
                        </div>

                        
                    </article>
                </div>
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
                        src="/camera.png"
                        alt="CANON EOS DSLR Camera"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left flex flex-col gap-2">
                        <p className="text-base font-medium">CANON EOS DSLR Camera</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$360</p>
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                            <Star className="fill-gray-500 text-gray-500 w-5 h-5"/>
                        </div>
                        <p className="text-sm text-gray-500">(95)</p>
                        </div>

                    </article>
                </div>
                <div className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-white">
                    <div className="relative bg-gray-100 rounded-2xl p-3">
                        {/* Discount Badge */}
                        <p className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-xl">
                        -30%
                        </p>

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
                        src="/laptop.png"
                        alt="ASUS FHD Gaming Laptop"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left flex flex-col gap-2">
                        <p className="text-base font-medium">ASUS FHD Gaming Laptop</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$700</p>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                        
                        </div>
                        <p className="text-sm text-gray-500">(325)</p>
                        </div>

                        {/* Rating */}
                    </article>
                </div>
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
                        src="/camera.png"
                        alt="Curology Product Set "
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left flex flex-col gap-2">
                        <p className="text-base font-medium">Curology Product Set </p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$500</p>
   
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                           
                            <Star className="fill-gray-500 text-gray-500 w-5 h-5"/>
                            
                        </div>
                        <p className="text-sm text-gray-500">(60)</p>
                        </div>

                    </article>
                </div>
            </div>
            {/* second row */}
            <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
                <div className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-white">
                    <div className="relative bg-gray-100 rounded-2xl p-3">
                        {/* Discount Badge */}
                        <p className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-xl">
                        New
                        </p>

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
                        src="/kid-car.png"
                        alt="Kids Electric Car"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left flex flex-col gap-2">
                        <p className="text-base font-medium">Kids Electric Car</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                            <p className="text-red-500 font-semibold">$960</p>
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
                        src="/boots.png"
                        alt="Jr. Zoom Soccer Cleats"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left flex flex-col gap-2">
                        <p className="text-base font-medium">Jr. Zoom Soccer Cleats</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$1160</p>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                           
                        </div>
                        <p className="text-sm text-gray-500">(35)</p>
                        </div>

                    </article>
                </div>
                <div className="flex flex-col w-full max-w-xs p-4 rounded-xl shadow-sm bg-white">
                    <div className="relative bg-gray-100 rounded-2xl p-3">
                        {/* Discount Badge */}
                        <p className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-xl">
                        New
                        </p>

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
                        src="/pad.png"
                        alt="GP11 Shooter USB Gamepad"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left flex flex-col gap-2">
                        <p className="text-base font-medium">GP11 Shooter USB Gamepad</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$660</p>
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                            <Star className="fill-gray-500 text-gray-500 w-5 h-5"/>
                        </div>
                        <p className="text-sm text-gray-500">(55)</p>
                        </div>

                        {/* Rating */}
                    </article>
                </div>
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
                        src="/jacket.png"
                        alt="Quilted Satin Jacket"
                        width={172}
                        height={152}
                        className="mx-auto my-10"
                        />
                    </div>

                    {/* Product Details */}
                    <article className="mt-4 text-left flex flex-col gap-2">
                        <p className="text-base font-medium">Quilted Satin Jacket</p>

                        {/* Price */}
                        <div className="flex justify-start gap-2 mt-1">
                        <p className="text-red-500 font-semibold">$660</p>
   
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-amber-400 text-amber-400 w-5 h-5"
                            />
                            ))}
                            <Star className="fill-gray-500 text-gray-500 w-5 h-5"/>
                        </div>
                        <p className="text-sm text-gray-500">(55)</p>
                        </div>

                    </article>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Link href='/products' className="bg-red-500 text-white px-6 py-2 rounded hover:bg-white hover:text-red-500  hover:border-red-500 hover:border transition-all duration-200">
                View All Products
                </Link>
            </div>
        </section>
    )
}