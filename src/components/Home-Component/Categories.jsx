import { Smartphone, Laptop, Watch, Camera, Headphones, Gamepad } from "lucide-react";
export default function Categories(){
    const categories = [
        { name: "Phones", icon: Smartphone },
        { name: "Computers", icon: Laptop },
        { name: "SmartWatch", icon: Watch },
        { name: "Camera", icon: Camera },
        { name: "Headphones", icon: Headphones },
        { name: "Gaming", icon: Gamepad },
      ];
    return(
        <section  className="px-4 sm:px-6 md:px-[135px] py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                <div className="bg-red-400 rounded w-5 h-10"></div>
                <p className="text-red-500 font-semibold">Categories</p>
                </div>
                {/*The flex in row which will have a space between */}
                <div className="flex justify-between">
                    {/*The first section with the falsh sales and time remaining */}
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <div className="flex items-center justify-center gap-6 flex-wrap">
                            <h1 className="text-4xl font-bold whitespace-nowrap">Browse By Category</h1>
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
            <div className="flex flex-wrap items-center justify-center gap-6">
                {categories.map((item, index) => (
                    <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-2 border border-gray-300 w-44 h-36 text-black bg-white hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300 cursor-pointer"
                    >
                    <item.icon className="w-14 h-14" />
                    <p className="text-sm font-semibold">{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}