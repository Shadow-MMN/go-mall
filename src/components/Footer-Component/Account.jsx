// File: components/Account.jsx
import Link from "next/link";

export default function Account() {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold">Account</h4>
            <ul className="flex flex-col gap-2">
                <li>
                    <Link href="/account" className="text-gray-600 hover:text-gray-800">
                        My Account
                    </Link>
                </li>
                <li>
                    <Link href="/sign-up" className="text-gray-600 hover:text-gray-800">
                        Login / Register
                    </Link>
                </li>
                <li>
                    <Link href="/cart" className="text-gray-600 hover:text-gray-800">
                        Cart
                    </Link>
                </li>
                <li>
                    <Link href="/wishlist" className="text-gray-600 hover:text-gray-800">
                        Wishlist
                    </Link>
                </li>
                <li>
                    <Link href="/products" className="text-gray-600 hover:text-gray-800">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    );
}