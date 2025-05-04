import WishlistClient from './WishlistClient';

export const metadata = {
  title: 'My Wishlist',
  description: 'View and manage your wishlist items',
};

export default function WishlistPage() {
  return <WishlistClient />;
}