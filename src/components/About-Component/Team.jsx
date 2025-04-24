import Image from 'next/image';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function TeamSection() {
  return (
    <div className="py-12 px-4 md:px-16">
      <h2 className="text-3xl font-black text-center mb-8">Meet Our Team</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-4 p-2">
          <Image
            src="/tom.png"
            alt="Tom Cruise"
            width={200}
            height={200}
            className="rounded"
          />
          <div className="text-center">
            <h3 className="font-black text-xl">Tom Cruise</h3>
            <p className="text-sm text-gray-500">Founder & Chairman</p>
            <div className="flex gap-4 justify-center mt-2">
              <Twitter className="w-4 h-4 text-gray-600" />
              <Instagram className="w-4 h-4 text-gray-600" />
              <Linkedin className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-4 p-2">
          <Image
            src="/jennifer.png"
            alt="Emma Watson"
            width={200}
            height={200}
            className="rounded"
          />
          <div className="text-center">
            <h3 className="font-black text-xl">Emma Watson</h3>
            <p className="text-sm text-gray-500">Managing Director</p>
            <div className="flex gap-4 justify-center mt-2">
              <Twitter className="w-4 h-4 text-gray-600" />
              <Instagram className="w-4 h-4 text-gray-600" />
              <Linkedin className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-4 p-2">
          <Image
            src="/will.png"
            alt="Will Smith"
            width={200}
            height={200}
            className="rounded"
          />
          <div className="text-center">
            <h3 className="font-black text-xl">Will Smith</h3>
            <p className="text-sm text-gray-500">Product Designer</p>
            <div className="flex gap-4 justify-center mt-2">
              <Twitter className="w-4 h-4 text-gray-600" />
              <Instagram className="w-4 h-4 text-gray-600" />
              <Linkedin className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="md:flex justify-center gap-2 mt-6 hidden">
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
} 
