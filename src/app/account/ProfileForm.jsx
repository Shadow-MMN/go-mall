'use client';

import { useState } from 'react';

export default function ProfileForm({ initialUserData }) {
  const [userData, setUserData] = useState(initialUserData);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log('Saving changes:', { userData, passwords });

  };

  return (
    <form onSubmit={handleSaveChanges}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleProfileChange}
            className="w-full p-3 bg-gray-100 rounded border-none"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleProfileChange}
            className="w-full p-3 bg-gray-100 rounded border-none"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleProfileChange}
            className="w-full p-3 bg-gray-100 rounded border-none"
          />
        </div>
        
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleProfileChange}
            className="w-full p-3 bg-gray-100 rounded border-none"
          />
        </div>
      </div>
      
      <h2 className="text-lg font-medium mb-4">Password Changes</h2>
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handlePasswordChange}
            className="w-full p-3 bg-gray-100 rounded border-none"
          />
        </div>
        
        <div>
          <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handlePasswordChange}
            className="w-full p-3 bg-gray-100 rounded border-none"
          />
        </div>
        
        <div>
          <label htmlFor="confirmNewPassword" className="block mb-2 text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={passwords.confirmNewPassword}
            onChange={handlePasswordChange}
            className="w-full p-3 bg-gray-100 rounded border-none"
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}