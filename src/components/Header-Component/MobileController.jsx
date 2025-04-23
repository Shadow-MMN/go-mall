'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search as SearchIcon, Menu, X } from 'lucide-react';

export default function MobileController() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const pathname = usePathname();

  const openMenuAndFocusSearch = () => {
    setIsMobileMenuOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 300);
  };

  return (
    <>
      <div className='flex items-center gap-4 md:hidden'>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

     
      <button className="sm:hidden" onClick={openMenuAndFocusSearch}>
        <SearchIcon className="w-5 h-5 text-gray-700" />
      </button>

      <div className={`md:hidden fixed top-0 left-0 w-full h-full z-50 bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <p className='text-2xl font-black'>Exclusive</p>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
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

          {/* Mobile Search Input */}
          <div className="flex items-center gap-2 border px-3 py-2 rounded bg-gray-200 mt-8">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none bg-transparent rounded flex-1"
              ref={searchInputRef}
            />
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
}