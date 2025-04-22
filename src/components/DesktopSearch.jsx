// File: components/DesktopSearch.jsx
'use client';

import { Search as SearchIcon } from 'lucide-react';

export default function DesktopSearch() {
  return (
    <div className="hidden sm:flex items-center gap-2 border px-2 py-1 rounded bg-gray-200">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent rounded w-32 md:w-40"
      />
      <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
    </div>
  );
}