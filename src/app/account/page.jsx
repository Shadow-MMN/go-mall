import Link from 'next/link';
import ProfileForm from './ProfileForm';

// Server Component
export default function AccountPage() {
  // In a real application, you would fetch user data from your database or API here
  const userData = {
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">My Account</span>
        <div className="ml-auto">
          Welcome! {userData.firstName} {userData.lastName}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <h2 className="font-bold text-lg mb-4">Manage My Account</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/account" className="text-red-500 hover:text-red-700">
              My Profile
            </Link>
            <Link href="/account/address-book" className="text-gray-600 hover:text-gray-900">
              Address Book
            </Link>
            <Link href="/account/payment-options" className="text-gray-600 hover:text-gray-900">
              My Payment Options
            </Link>
          </nav>

          <h2 className="font-bold text-lg mt-6 mb-4">My Orders</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/account/returns" className="text-gray-600 hover:text-gray-900">
              My Returns
            </Link>
            <Link href="/account/cancellations" className="text-gray-600 hover:text-gray-900">
              My Cancellations
            </Link>
          </nav>

          <h2 className="font-bold text-lg mt-6 mb-4">My Wishlist</h2>
        </div>

        {/* Main content - Client Component */}
        <div className="flex-1">
          <h1 className="text-xl font-medium text-red-500 mb-6">Edit Your Profile</h1>
          
          {/* Pass the userData to the client component */}
          <ProfileForm initialUserData={userData} />
        </div>
      </div>
    </div>
  );
}