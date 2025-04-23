import Image from "next/image"
export default function Contact(){
    return(
        <section className="flex justify-center items-center min-h-screen p-4">
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl">
                
                {/* Left Column - 1/3 */}
                <div className="lg:w-1/3 w-full shadow-md flex flex-col gap-6 p-6 bg-white rounded">
                {/* First Div with border-bottom */}
                <div className="flex flex-col items-center text-center gap-3 pb-6 relative">
                    <div className="flex items-center gap-3">
                    <Image
                        src="/call-icon.png"
                        alt="A red phone icon"
                        width={40}
                        height={40}
                        className="rounded text-white bg-white"
                    />
                    <h2 className="text-xl font-semibold">Call To Us</h2>
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8401611112222</p>
                    {/* Centered 80% bottom line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 border-b border-gray-400"></div>
                </div>
        
                {/* Second Div */}
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex items-center gap-3">
                    <Image
                        src="/email-icon.png"
                        alt="Email icon"
                        width={40}
                        height={40}
                        className="rounded text-white bg-white"
                    />
                    <h2 className="text-xl font-semibold">Write To Us</h2>
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
                </div>
        
                
                <div className="lg:w-2/3 w-full shadow-md bg-white p-6 rounded flex flex-col gap-6">
            
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="flex-1 border border-gray-300 px-4 py-2 rounded"
                    />
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 border border-gray-300 px-4 py-2 rounded"
                    />
                    <input
                    type="text"
                    placeholder="Your Phone"
                    className="flex-1 border border-gray-300 px-4 py-2 rounded"
                    />
                </div>
        
                {/* Textarea */}
                <textarea
                    placeholder="Your Message"
                    className="border border-gray-300 px-4 py-2 rounded min-h-[150px]"
                ></textarea>
        
                {/* Button - Bottom Right */}
                <div className="flex justify-end">
                    <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-gray-800 transition-all duration-200">
                    Send Message
                    </button>
                </div>
                </div>
            </div>
    </section>
    )
}