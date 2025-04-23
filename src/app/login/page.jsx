import Image from 'next/image';
import Link from 'next/link';
export default function login(){
    return(
        <main className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 px-4 py-10 ">
        {/* Left column (image) - 2/3 width */}
        <div className="w-full md:w-2/3 h-full flex justify-center items-center">
          <Image 
            src="/signUp-login.png" 
            alt="A smart phone on a shopping cart" 
            width={600} 
            height={600} 
            className="rounded shadow-md w-full h-full object-cover max-h-[700px]"
          />
        </div>
      
        {/* Right column (form) - 1/3 width */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 bg-white p-6 rounded  max-w-md md:max-w-none">
          <div>
            <h2 className="text-2xl font-semibold text-left">Log in to Exclusive</h2>
            <p className="text-left text-gray-600">Enter your details below</p>
          </div>
      
          <input type="text" placeholder="Email or Phone Number" className="p-3 border-b border-gray-300 placeholder-gray-400 focus:outline-none focus:border-black" />
          <input type="password" placeholder="Password" className="p-3 border-b border-gray-300 placeholder-gray-400 focus:outline-none focus:border-black" />
      
          <div className="flex items-center justify-between">
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-gray-800 transition-all duration-200">
              Log in
            </button>
            <Link href="/forgot-password" className="text-sm text-red-500 hover:underline">
              Forgot Password
            </Link>
          </div>
        </div>
      </main>
      
    )
}