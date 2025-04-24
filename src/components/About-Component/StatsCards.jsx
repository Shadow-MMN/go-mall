import { Store, CircleDollarSign, ShoppingBag, Wallet } from 'lucide-react';

export default function StatsCards() {
  return (
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
  );
} 
