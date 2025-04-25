import Image from "next/image"
import Link from "next/link"
export default function HeroSection(){
    return(
        <section className="px-4 md:px-[135px] py-8 flex flex-col lg:flex-row gap-10">
        {/* Category Nav */}
        {/* — mobile: horizontal scroll; lg+: vertical list */}
        <nav className="block lg:hidden overflow-x-auto pb-4">
            <ul className="flex space-x-6">
            {[
                "Women's Fashion",
                "Men's Fashion",
                "Electronics",
                "Home & Lifestyle",
                "Medicine",
                "Sports & Outdoor",
                "Baby & Toys",
                "Groceries & Pets",
                "Health & Beauty",
            ].map((cat) => (
                <li key={cat} className="whitespace-nowrap text-gray-700 hover:text-black">
                {cat}
                </li>
            ))}
            </ul>
        </nav>
        <nav className="hidden lg:block border-r border-gray-400 pr-6">
            <ul className="flex flex-col space-y-4">
            {[
                "Women's Fashion",
                "Men's Fashion",
                "Electronics",
                "Home & Lifestyle",
                "Medicine",
                "Sports & Outdoor",
                "Baby & Toys",
                "Groceries & Pets",
                "Health & Beauty",
            ].map((cat) => (
                <li key={cat} className="hover:text-black">{cat}</li>
            ))}
            </ul>
        </nav>

        {/* Hero Card */}
        <div className="flex-1 bg-black text-white flex flex-col md:flex-row items-center md:items-start p-6 rounded-lg overflow-hidden">
            {/* Left content */}
            <div className="flex-shrink-0 flex flex-col gap-4 md:gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
                <Image
                src="/apple-icon.png"
                alt="iPhone icon"
                width={40}
                height={49}
                className="rounded"
                />
                <p className="font-medium">iPhone 14 Series</p>
            </div>
            <h2 className="text-5xl font-bold leading-tight max-w-xs">
                Up to 10% off Voucher
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-3">
                <Link href="/products" className="border-b border-white pb-1">
                Shop Now
                </Link>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                />
                </svg>
            </div>
            {/* mobile-only indicator dots */}
            <div className="flex space-x-2 mt-6 md:hidden">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
            </div>

            {/* Right image */}
            <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
            <Image
                src="/home-page-hero.png"
                alt="Hero"
                width={496}
                height={352}
                className="rounded object-cover sm:w-[496px] lg:w-[900px]"
            />
            </div>
        </div>
        </section>
    )
}