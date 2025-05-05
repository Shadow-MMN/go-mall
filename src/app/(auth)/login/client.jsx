'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Adjust this path to your Firebase config
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/');

  // Get redirect path from URL parameters on component mount
  // and check if user is already logged in
  useEffect(() => {
    // Get redirect path from query params
    const redirect = searchParams.get('redirect');
    if (redirect) {
      setRedirectPath(redirect);
    } else {
      // If no specific redirect was provided, we'll default to the account page
      // since this likely came from the account protection redirect
      setRedirectPath('/account');
    }

    // Check if user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to the intended destination
        router.push(redirectPath);
      }
    });

    return () => unsubscribe();
  }, [searchParams, router]);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError('');
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, emailOrPhone, password);
      setEmailOrPhone('');
      setPassword('');
      
      // Redirect to the path stored from query parameters or to account page
      router.push(redirectPath);
    } catch (err) {
      // Provide more specific error messages based on Firebase error codes
      if (err.code === 'auth/invalid-email') {
        setError('Invalid email format.');
      } else if (err.code === 'auth/user-not-found') {
        setError('No account found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed login attempts. Please try again later.');
      } else {
        setError('Invalid credentials. Please try again.');
      }
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 px-4 py-10">
      {/* Left column (image) */}
      <div className="w-full md:w-2/3 h-full flex justify-center items-center">
        <Image 
          src="/signUp-login.png" 
          alt="A smart phone on a shopping cart" 
          width={600} 
          height={600} 
          className="rounded shadow-md w-full h-full object-cover max-h-[700px]"
        />
      </div>

      {/* Right column (form) */}
      <div className="w-full md:w-1/3 flex flex-col gap-6 bg-white p-6 rounded max-w-md md:max-w-none">
        <div>
          <h2 className="text-2xl font-semibold text-left">Log in to Exclusive</h2>
          <p className="text-left text-gray-600">Enter your details below</p>
          {redirectPath.includes('/account') && (
            <p className="text-sm text-red-500 mt-2">Sign in to access your account</p>
          )}
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="p-3 border-b border-gray-300 placeholder-gray-400 focus:outline-none focus:border-black"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border-b border-gray-300 placeholder-gray-400 focus:outline-none focus:border-black"
            required
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className={`bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-all duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Signing in...' : 'Log in'}
            </button>
            <Link href="/forgot-password" className="text-sm text-red-500 hover:underline">
              Forgot Password
            </Link>
          </div>
        </form>

        {/* Sign up prompt with redirect parameter */}
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <Link 
            href={`/sign-up${redirectPath !== '/' ? `?redirect=${encodeURIComponent(redirectPath)}` : ''}`} 
            className="text-sm text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}