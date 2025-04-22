"use client";
import Link from "next/link";

export default function TopHeader() {
  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    document.documentElement.lang = selectedLang;
  };

  return (
    <div className="relative bg-black text-white py-3 md:py-6 min-h-[50px] md:min-h-[70px] flex justify-between items-center px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center mx-auto sm:mx-0">
      <p className="text-xs sm:text-sm md:text-base">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
      </p>
      <Link 
        href="/" 
        className="underline text-blue-300 text-xs sm:text-sm whitespace-nowrap"
      >
        ShopNow
      </Link>
    </div>
    <div className="absolute right-4 sm:static">
      <select 
        className="px-2 py-1 rounded text-xs sm:text-sm bg-gray-800 text-white border border-gray-600"
        onChange={handleLangChange}
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
        <option value="de">DE</option>
        <option value="ig">IG</option>
      </select>
    </div>
  </div>
  );
}
