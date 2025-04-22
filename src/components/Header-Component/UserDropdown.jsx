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
        <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
          <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Manage my account
          </Link>
          <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            My orders
          </Link>
          <Link href="/cancellations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            My cancellations
          </Link>
          <Link href="/reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            My reviews
          </Link>
          <hr className="my-1 border-gray-200" />
          <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}