'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import ProfileForm from './ProfileForm';

export default function AccountClient() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        const [firstName, lastName] = (user.displayName || '').split(' ');
        setUserData({
          firstName: firstName || '',
          lastName: lastName || '',
          email: user.email || '',
          address: '' 
        });
      } else {
        // No user is signed in, redirect to login with return path
        router.push(`/login?redirect=${encodeURIComponent('/account')}`);
        return;
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // If we're not loading and no user data, something went wrong
  // This is a fallback in case the router.push doesn't redirect immediately
  if (!userData) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <p className="mb-4">Please sign in to access your account</p>
        <Link href="/login" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
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
        <div className="w-full md:w-64 flex-shrink-0">
          <h2 className="font-bold text-lg mb-4">Manage My Account</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/account" className="text-red-500 hover:text-red-700">My Profile</Link>
            <Link href="/account/address-book" className="text-gray-600 hover:text-gray-900">Address Book</Link>
            <Link href="/account/payment-options" className="text-gray-600 hover:text-gray-900">My Payment Options</Link>
          </nav>
          <h2 className="font-bold text-lg mt-6 mb-4">My Orders</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/account/returns" className="text-gray-600 hover:text-gray-900">My Returns</Link>
            <Link href="/account/cancellations" className="text-gray-600 hover:text-gray-900">My Cancellations</Link>
          </nav>
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-medium text-red-500 mb-6">Edit Your Profile</h1>
          <ProfileForm initialUserData={userData} />
        </div>
      </div>
    </div>
  );
}