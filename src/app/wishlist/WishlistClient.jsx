'use client';

import WishlistContent from './components/WishlistContent';
import WishlistProvider from './WishlistProvider';

export default function WishlistClient() {
  return (
    <WishlistProvider>
      <WishlistContent />
    </WishlistProvider>
  );
}