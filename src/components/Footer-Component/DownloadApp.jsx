'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function DownloadApp() {
  return (
    <div className="text-white text-center md:text-left space-y-4">
      <h3 className="text-xl font-semibold">Download App</h3>
      <p className="text-sm text-gray-300">Save $3 with App New User Only</p>
      <div className="flex items-center justify-center md:justify-start gap-4">
        <Image 
          src="/qr-code.png" 
          alt="QR Code" 
          width={80} 
          height={80} 
          className="rounded text-white bg-white"
        />
        <div className="space-y-2">
          <Image 
            src="/google-play-badge.png" 
            alt="Get it on Google Play" 
            width={140} 
            height={40} 
            className='bg-white'
          />
          <Image 
            src="/app-store-badge.png" 
            alt="Download on the App Store" 
            width={140} 
            height={40} 
            className='bg-white'
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start gap-4 mt-4">
        <Link href="#" aria-label="Facebook">
          <Facebook className="w-5 h-5 hover:text-gray-400" />
        </Link>
        <Link href="#" aria-label="Twitter">
          <Twitter className="w-5 h-5 hover:text-gray-400" />
        </Link>
        <Link href="#" aria-label="Instagram">
          <Instagram className="w-5 h-5 hover:text-gray-400" />
        </Link>
        <Link href="#" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:text-gray-400" />
        </Link>
      </div>
    </div>
  );
}
