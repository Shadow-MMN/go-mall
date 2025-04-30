'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown} 
        className="flex items-center"
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        <div className={`rounded-3xl p-2 w-10 flex items-center justify-center cursor-pointer transition-colors duration-200 
          ${isOpen ? 'bg-red-500' : 'bg-white hover:bg-red-500'}`}>
          <User className={`rounded-lg w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200 
            ${isOpen ? 'text-white' : 'text-black hover:text-white'}`} />
        </div>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gradient-to-tl from-stone-900 to-zinc-400 rounded-md shadow-lg py-1 z-10 border border-gray-200 cursor-pointer">
          <Link href="/account" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-100">
            Manage my account
          </Link>
          <Link href="/orders" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-100">
            My orders
          </Link>
          <Link href="/cancellations" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-100">
            My cancellations
          </Link>
          <Link href="/reviews" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-100">
            My reviews
          </Link>
          <Link href="/logout" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-100">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
