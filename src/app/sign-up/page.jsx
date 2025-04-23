import Image from 'next/image';
import Link from 'next/link';
export default function SignUp(){
    return(
        <main className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 px-4 py-10">
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
            <div className="w-full md:w-1/3 flex flex-col gap-4 bg-white p-6 rounded">
                <h2 className="text-2xl font-semibold text-left">Create an account</h2>
                <p className="text-left text-gray-600">Enter your details below</p>

                <input type="text" placeholder="Name" className="p-2 border-b placeholder-gray-400" />
                <input type="text" placeholder="Email or Phone Number" className="p-2 border-b placeholder-gray-400" />
                <input type="password" placeholder="Password" className="p-2 border-b placeholder-gray-400" />

                <button className="bg-red-500 text-white py-2 rounded hover:bg-red-400 transition">Create Account</button>

                <div className="flex items-center justify-center gap-2 border py-2 rounded cursor-pointer hover:bg-gray-400">
                    <Image src="/google-icon.png" alt="Google" width={35} height={35} />
                    <p className="text-sm text-gray-700">Sign up with Google</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <p className="text-sm text-gray-600">Already have an account?</p>
                    <Link href="/login" className="text-sm text-blue-600 hover:underline">Log in</Link>
                </div>
            </div>
        </main>
    )
}