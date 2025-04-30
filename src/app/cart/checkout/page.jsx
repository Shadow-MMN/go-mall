// app/cart/checkout/page.jsx
import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Checkout | Your Store',
  description: 'Complete your purchase'
};

export default async function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <CheckoutForm />
    </div>
  );
}