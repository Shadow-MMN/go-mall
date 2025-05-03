"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24 gap-4 text-center">
      <h1 className="text-6xl font-bold">404 Not Found</h1>
      <p className="text-gray-600">
        The page you were looking for doesn't exist. You may go back to the home page or return to the previous page.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-gray-800 transition-all duration-200"
        >
          Back to home page
        </Link>
        <button
          onClick={() => router.back()}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-gray-800 transition-all duration-200"
        >
          Go back
        </button>
      </div>
    </div>
  )
}
