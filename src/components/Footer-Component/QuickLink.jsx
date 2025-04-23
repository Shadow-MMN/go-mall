export default function QuickLink() {
    return (
        <div className="flex flex-col gap-4">
        <h4 className="text-xl font-semibold">Quick Links</h4>
        <ul className="flex flex-col gap-2">
            <li>
            <a href="/about" className="text-gray-600 hover:text-gray-800">
                About Us
            </a>
            </li>
            <li>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact Us
            </a>
            </li>
            <li>
            <a href="/privacy" className="text-gray-600 hover:text-gray-800">
                Privacy Policy
            </a>
            </li>
            <li>
            <a href="/terms" className="text-gray-600 hover:text-gray-800">
                Terms of Service
            </a>
            </li>
        </ul>
        </div>
    );
}