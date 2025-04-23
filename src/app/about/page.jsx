import Image from "next/image";
import { Store, CircleDollarSign, ShoppingBag, Truck, Headset, ShieldCheck, Wallet, Twitter, Instagram, Linkedin } from 'lucide-react';
import Head from "next/head";

export default function About() {
  return (
    <section className="flex flex-col gap-8">
      {/*The two tops */}
      <div className="flex flex-col md:flex-row pt-12 gap-8 px-4 md:px-16">
  {/* Text Section */}
  <div className="flex items-center md:w-1/2">
    <article className="flex flex-col gap-5">
      <h2 className="font-black text-5xl leading-tight">Our Story</h2>
      <p className="text-gray-700 leading-relaxed">
        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Exclusive offers more than 1 million products and continues to grow rapidly. We provide a diverse assortment of categories ranging from consumer goods to electronics and fashion.
      </p>
    </article>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex items-center">
    <Image
      src="/about-pic.png"
      alt="Two girls holding shopping bags and checking out their phone"
      width={626}
      height={417}
      className="rounded object-cover w-full h-full"
    />
  </div>
      </div>
      {/* The four things in a row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">

          <div className="flex flex-col gap-3 border-gray-300 items-center border p-4 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
            <div className="bg-black hover:bg-white rounded-3xl p-2 w-10 flex items-center justify-center">
              <Store className="text-white hover:text-black rounded-lg" />
            </div>
            <p className="font-black text-lg">10.5k</p>
            <p className="text-sm">Sallers active our site</p>
          </div>

          <div className="flex flex-col gap-3 border-gray-300 items-center border p-4 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
            <div className="bg-black hover:bg-white rounded-3xl p-2 w-10 flex items-center justify-center">
              <CircleDollarSign className="text-white hover:text-black rounded-lg" />
            </div>
            <p className="font-black text-lg">10.5k</p>
            <p className="text-sm">Monthly Product Sale</p>
          </div>

          <div className="flex flex-col gap-3 border-gray-300 items-center border p-4 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
            <div className="bg-black hover:bg-white rounded-3xl p-2 w-10 flex items-center justify-center">
              <ShoppingBag className="text-white hover:text-black rounded-lg" />
            </div>
            <p className="font-black text-lg">45.5k</p>
            <p className="text-sm">Customer active in our site</p>
          </div>

          <div className="flex flex-col gap-3 border-gray-300 items-center border p-4 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
            <div className="bg-black hover:bg-white rounded-3xl p-2 w-10 flex items-center justify-center">
              <Wallet className="text-white hover:text-black rounded-lg" />
            </div>
            <p className="font-black text-lg">25k</p>
            <p className="text-sm">Annual gross sale in our site</p>
          </div>

      </div>




      {/*The carousel of people */}
      <div className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-black text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-4 p-2">
            <Image
              src="/tom.png" // replace with actual image path
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
              src="/jennifer.png" // replace with actual image path
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
              src="/will.png" // replace with actual image path
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


      {/*The three things in a row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <div className="flex flex-col gap-3 items-center p-4 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
            <div className="bg-black hover:bg-white rounded-3xl p-2 w-10 flex items-center justify-center">
              <Truck className="text-white hover:text-black rounded-lg" />
            </div>
            <p className="font-black text-lg">FREE AND FAST DELIVERY</p>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col gap-3 items-center p-4 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
            <div className="bg-black hover:bg-white rounded-3xl p-2 w-10 flex items-center justify-center">
              <Headset className="text-white hover:text-black rounded-lg" />
            </div>
            <p className="font-black text-lg">24/7 CUSTOMER SERVICE</p>
            <p className="text-sm">Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col gap-3 items-center p-4 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
            <div className="bg-black hover:bg-white rounded-3xl p-2 w-10 flex items-center justify-center">
              <ShieldCheck className="text-white hover:text-black rounded-lg" />
            </div>
            <p className="font-black text-lg">MONEY BACK GUARANTEE</p>
            <p className="text-sm">We reurn money within 30 days</p>
          </div>
      </div>


    </section>
  );
}