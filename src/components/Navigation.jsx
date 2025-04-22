// File: components/Navigation.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Search from './Search';

export default function Navigation({ onMobileMenuOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle mobile menu and notify parent if needed
  const toggleMobileMenu = (isOpen) => {
    setIsMobileMenuOpen(isOpen);
    if (isOpen && onMobileMenuOpen) {
      onMobileMenuOpen();
    }
  };

  return (
    <>
      {/* Logo and Mobile Menu Button */}
      <div className='flex items-center gap-4'>
        <button 
          className="md:hidden"
          onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        <p className='text-xl font-black sm:text-2xl md:text-3xl'>Exclusive</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <nav className="font-light">
          <ul className="hidden md:flex items-center gap-8 lg:gap-40">
            <li>
              <Link href="/" className={`${pathname === '/' ? 'border-b border-black pb-1' : ''}`}>Home</Link>
            </li>
            <li>
              <Link href="/contact" className={`${pathname === '/contact' ? 'border-b border-black pb-1' : ''}`}>Contact</Link>
            </li>
            <li>
              <Link href="/about" className={`${pathname === '/about' ? 'border-b border-black pb-1' : ''}`}>About</Link>
            </li>
            <li>
              <Link href="/sign-up" className={`${pathname === '/sign-up' ? 'border-b border-black pb-1' : ''}`}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full z-50 bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <p className='text-2xl font-black'>Exclusive</p>
            <button 
              onClick={() => toggleMobileMenu(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <MobileNavigation />
          
          {/* Mobile Search Input */}
          <Search isMobile={true} autoFocus={true} />
        </div>
      </div>
    </>
  );
}

function MobileNavigation() {
  const pathname = usePathname();
  return (
    <nav className="font-medium">
      <ul className="flex flex-col gap-6 text-lg">
        <li>
          <Link href="/" className={`block py-2 ${pathname === '/' ? 'border-b border-black pb-1' : ''}`}>Home</Link>
        </li>
        <li>
          <Link href="/contact" className={`block py-2 ${pathname === '/contact' ? 'border-b border-black pb-1' : ''}`}>Contact</Link>
        </li>
        <li>
          <Link href="/about" className={`block py-2 ${pathname === '/about' ? 'border-b border-black pb-1' : ''}`}>About</Link>
        </li>
        <li>
          <Link href="/sign-up" className={`block py-2 ${pathname === '/sign-up' ? 'border-b border-black pb-1' : ''}`}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}