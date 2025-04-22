// File: components/DesktopNavigation.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopNavigation() {
  const pathname = usePathname();
  
  return (
    <div className="hidden md:block">
      <nav className="font-light">
        <ul className="hidden md:flex items-center gap-4 lg:gap-24">
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
  );
}