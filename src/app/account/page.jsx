import AccountClient from './client';

export const metadata = {
  title: 'My Account',
  description: 'Manage your profile and view your orders',
};

export default function AccountPage() {
  return <AccountClient />;
}