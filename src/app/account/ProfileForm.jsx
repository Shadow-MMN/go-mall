'use client';

import { useState } from 'react';
import { updateProfile, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth} from '@/lib/firebase';
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

  const handleSaveChanges = async(e) => {
    e.preventDefault();
    let successMessage = "Profile updated successfully!";
    let hasPasswordChange = false;
    let hasProfileChange = false;
    
    try {
      // Update display name
      if (userData.firstName !== initialUserData.firstName || 
          userData.lastName !== initialUserData.lastName) {
        await updateProfile(auth.currentUser, {
          displayName: `${userData.firstName} ${userData.lastName}`
        });
        hasProfileChange = true;
      }
      
      // Update email if changed
      if (userData.email !== initialUserData.email) {
        await updateEmail(auth.currentUser, userData.email);
        hasProfileChange = true;
      }
      
      // Handle password change if new password provided
      if (passwords.newPassword) {
        if (passwords.newPassword !== passwords.confirmNewPassword) {
          alert("New passwords do not match");
          return;
        }
        
        if (passwords.newPassword.length < 6) {
          alert("Password must be at least 6 characters");
          return;
        }
        
        // Re-authenticate user before changing password
        try {
          const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            passwords.currentPassword
          );
          await reauthenticateWithCredential(auth.currentUser, credential);
          
          // Change password
          await updatePassword(auth.currentUser, passwords.newPassword);
          hasPasswordChange = true;
          
          // Clear password fields
          setPasswords({
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
          });
        } catch (error) {
          if (error.code === 'auth/wrong-password') {
            alert("Current password is incorrect");
          } else {
            alert(`Authentication error: ${error.message}`);
          }
          return;
        }
      }
      
      // Handle address update (would typically store in Firestore or another database)
      if (userData.address !== initialUserData.address) {
        // Example: Update address in Firestore
        // const userDocRef = doc(db, "users", auth.currentUser.uid);
        // await updateDoc(userDocRef, { address: userData.address });
        hasProfileChange = true;
      }
      
      // Show appropriate success message
      if (hasPasswordChange && hasProfileChange) {
        successMessage = "Profile and password updated successfully!";
      } else if (hasPasswordChange) {
        successMessage = "Password updated successfully!";
      } else if (hasProfileChange) {
        successMessage = "Profile updated successfully!";
      } else {
        successMessage = "No changes detected";
      }
      
      alert(successMessage);
      
    } catch (error) {
      console.error('Error updating profile:', error);
      
      // Handle specific error cases
      if (error.code === 'auth/requires-recent-login') {
        alert("For security reasons, please log out and log back in before changing your password");
      } else if (error.code === 'auth/email-already-in-use') {
        alert("Email is already in use by another account");
      } else if (error.code === 'auth/invalid-email') {
        alert("Please provide a valid email address");
      } else {
        alert(`Error updating profile: ${error.message}`);
      }
    }
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