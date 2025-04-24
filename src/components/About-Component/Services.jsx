import { Truck, Headset, ShieldCheck } from 'lucide-react';

export default function ServiceFeaturesSection() {
  return (
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
  );
}
