import Link from "next/link"
import Image from "next/image"
import CircularCountdownTimer from "./CircularCountdown"
export default function CategoriesSecond(){
    return(
        <section className="px-4 sm:px-6 md:px-[135px] py-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row bg-black text-white rounded-2xl overflow-hidden shadow-lg">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-6 p-8 justify-center">
            <div className="flex items-center justify-center md:justify-start">
                <p className="text-green-400 text-sm uppercase tracking-widest">Categories</p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-lg text-center md:text-left">
                Enhance Your Music Experience
            </h2>

            <div className="flex justify-center md:justify-start">
                 <CircularCountdownTimer />
            </div>

            <div className="flex justify-center md:justify-start">
                <Link href="/products" className="mt-4 bg-green-500 hover:bg-green-600 transition-colors text-white py-3 px-6 rounded-full font-semibold shadow-md">
                Buy Now!
                </Link>
            </div>
            </div>

            {/* Right Image */}
            <div className="relative flex-1 min-h-[300px]">
            <Image
                src="/jbl.png"
                alt="A black JBL BoomBox"
                fill
                className="md:rounded-r-2xl object-cover"
            />
            </div>
        </div>
        </section>
    )
}