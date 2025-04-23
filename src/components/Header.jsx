// File: components/Header.jsx
import { Heart, ShoppingCart } from 'lucide-react';
import MobileController from './Header-Component/MobileController';
import DesktopNavigation from './Header-Component/DesktopNavigation';
import DesktopSearch from './Header-Component/DesktopSearch';
import UserDropdown from './Header-Component/UserDropdown';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between border-b border-gray-400 items-center pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-8 md:pt-6 md:pb-4 md:px-24'>
      <div className='flex items-center gap-4'>
        <MobileController />
        <p className='text-xl font-black sm:text-2xl md:text-3xl'>Exclusive</p>
      </div>
      <DesktopNavigation />
      <div className='flex items-center gap-2 sm:gap-4'>
        <DesktopSearch />
        <Link href="/wishlist" aria-label="Go to Wishlist">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </Link>
        <Link href="/cart" aria-label="Go to Cart">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </Link>
        <UserDropdown />
      </div>
    </div>
  );
}