// File: components/Exclusive.jsx
export default function Exclusive() { 
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold">Exclusive</h4>
            <p className="text-gray-600">Subscribe</p>
            <p className="text-gray-600">Get 10% off your first order</p>
            <div className="flex items-center gap-2 mt-4 border px-3 py-2 rounded bg-black border-white">
                <input
                    type="email"
                    placeholder="Enter your Email"
                    className="outline-none bg-transparent rounded flex-1 text-white"
                />
                <button aria-label="Submit Email">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    className="w-5 h-5 text-white"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}