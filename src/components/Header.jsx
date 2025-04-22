// File: components/Header.jsx
import { Heart, ShoppingCart } from 'lucide-react';
import MobileController from './MobileController';
import DesktopNavigation from './DesktopNavigation';
import DesktopSearch from './DesktopSearch';

export default function Header() {
  return (
    <div className='flex justify-between border-b border-black items-center pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-8 md:pt-6 md:pb-4 md:px-24'>
      {/* Logo */}
      <div className='flex items-center gap-4'>
        {/* MobileController handles mobile menu button */}
        <MobileController />
        <p className='text-xl font-black sm:text-2xl md:text-3xl'>Exclusive</p>
      </div>

      {/* Desktop Navigation */}
      <DesktopNavigation />

      {/* Icons and Search */}
      <div className='flex items-center gap-2 sm:gap-4'>
        {/* Desktop Search Component */}
        <DesktopSearch />
        
        {/* Icon buttons (remains in server component) */}
        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-black" aria-label="Favorite" />
        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" aria-label="Cart" />
      </div>
    </div>
  );
}