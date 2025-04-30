// app/order-confirmation/page.jsx
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Order Confirmation | Your Store',
  description: 'Thank you for your order'
};

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been received and is now being processed. 
          We've sent you an email with your order details.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-medium">#ORD-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Payment Method:</span>
            <span className="font-medium">Cash on delivery</span>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link href="/">
            <span className="inline-block bg-red-500 text-white font-medium px-6 py-3 rounded hover:bg-red-600 transition-colors">
              Continue Shopping
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}