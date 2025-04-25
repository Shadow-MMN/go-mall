import Link from "next/link"
import Image from "next/image"
export default function NewArrivals(){
    return (
        <section className="px-4 sm:px-6 md:px-[135px] py-8 flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                <div className="bg-red-400 rounded w-5 h-10"></div>
                <p className="text-red-500 font-semibold">Featured</p>
                </div>
                <h1 className="text-4xl font-bold">New Arrival</h1>
            </div>

            {/* Main Grid */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* PS5 - Left Column */}
                <div className="relative w-full lg:w-1/2 h-[400px] rounded-lg overflow-hidden group shadow-2xl">
                <Image
                    src="/ps5.png"
                    alt="PS5"
                    fill
                    className="object-cover md:object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <article className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h4 className="text-lg font-semibold">PlayStation 5</h4>
                    <p className="text-sm mt-1">Black and white version of the PS5 coming out on sale</p>
                    <Link href="/products" className="underline text-xs sm:text-sm mt-2 inline-block">
                    Shop Now
                    </Link>
                </article>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                {/* Women's Collection */}
                <div className="relative w-full h-[200px] sm:h-[286px] rounded-lg overflow-hidden group">
                    <Image
                    src="/women-collection.png"
                    alt="Women's Collection"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 scale-x-[-1]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <article className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h4 className="text-lg font-semibold">Women’s Collections</h4>
                    <p className="text-sm mt-1">Featured woman collections that give you another vibe.</p>
                    <Link href="/products" className="underline text-xs sm:text-sm mt-2 inline-block">
                        Shop Now
                    </Link>
                    </article>
                </div>

                {/* Speakers and Perfume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Speakers */}
                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden group shadow-2xl">
                        <Image
                            src="/speakers.png"
                            alt="Speakers"
                            fill
                            className="object-cover md:object-contain transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <article className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <h4 className="text-lg font-semibold">Speakers</h4>
                            <p className="text-sm mt-1">Amazon wireless speakers</p>
                            <Link href="/products" className="underline text-xs sm:text-sm mt-2 inline-block">
                            Shop Now
                            </Link>
                        </article>
                        </div>

                    {/* Perfume */}
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden group shadow-2xl">
                        <Image
                            src="/perfume.png"
                            alt="Perfume"
                            fill
                            className="object-cover md:object-contain transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <article className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <h4 className="text-lg font-semibold">Perfume</h4>
                            <p className="text-sm mt-1">GUCCI INTENSE OUD EDP</p>
                            <Link href="/products" className="underline text-xs sm:text-sm mt-2 inline-block">
                            Shop Now
                            </Link>
                        </article>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}