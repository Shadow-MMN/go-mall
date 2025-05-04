'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [redirectPath, setRedirectPath] = useState('/');

  // Get redirect path from URL parameters on component mount
  useEffect(() => {
    const redirect = searchParams.get('redirect');
    if (redirect) {
      setRedirectPath(redirect);
    }
  }, [searchParams]);

  const handleSignUp = async () => {
    setError('');
    setSuccess('');
  
    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailOrPhone, password);
      const user = userCredential.user;
      setName("");
      setEmailOrPhone("");
      setPassword("");
      setSuccess('Account created successfully!');
      console.log('User:', user);
      
      // Redirect to the path stored from query parameters or to homepage
      router.push(redirectPath);
    } catch (err) {
      setError(err.message);
    }
  };
  
  const handleGoogleSignUp = async () => {
    setError('');
    setSuccess('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setSuccess('Signed in with Google!');
      console.log('Google User:', user);
      
      // Redirect to the path stored from query parameters or to products page
      router.push(redirectPath);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 px-4 py-10">
      {/* Image Column */}
      <div className="w-full md:w-2/3 h-full flex justify-center items-center">
        <Image
          src="/signUp-login.png"
          alt="A smart phone on a shopping cart"
          width={600}
          height={600}
          className="rounded shadow-md w-full h-full object-cover max-h-[700px]"
        />
      </div>

      {/* Form Column */}
      <div className="w-full md:w-1/3 flex flex-col gap-4 bg-white p-6 rounded">
        <h2 className="text-2xl font-semibold text-left">Create an account</h2>
        <p className="text-left text-gray-600">Enter your details below</p>
        {redirectPath !== '/' && (
          <p className="text-sm text-red-500">Create an account to complete your purchase</p>
        )}

        <input
          type="text"
          placeholder="Name"
          className="p-2 border-b placeholder-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border-b placeholder-gray-400"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border-b placeholder-gray-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <button
          onClick={handleSignUp}
          className="bg-red-500 text-white py-2 rounded hover:bg-red-400 transition"
        >
          Create Account
        </button>

        <button
          onClick={handleGoogleSignUp}
          className="flex items-center justify-center gap-2 border py-2 rounded cursor-pointer hover:bg-gray-400"
        >
          <Image src="/google-icon.png" alt="Google" width={35} height={35} />
          <p className="text-sm text-gray-700">Sign up with Google</p>
        </button>

        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link 
            href={`/login${redirectPath !== '/' ? `?redirect=${encodeURIComponent(redirectPath)}` : ''}`}
            className="text-sm text-blue-600 hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}