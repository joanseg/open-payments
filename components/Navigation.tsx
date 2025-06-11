import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-[#1F2937] text-xl font-semibold">Open Payments</span>
            </Link>
          </div>

          {/* Navigation Links */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-[#1F2937] hover:text-gray-600">Products</Link>
            <Link href="/solutions" className="text-[#1F2937] hover:text-gray-600">Solutions</Link>
            <Link href="/developers" className="text-[#1F2937] hover:text-gray-600">Developers</Link>
            <Link href="/company" className="text-[#1F2937] hover:text-gray-600">Company</Link>
            <Link href="/pricing" className="text-[#1F2937] hover:text-gray-600">Pricing</Link>
          </div> */}

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/api-keys" className="text-[#1F2937] hover:text-gray-600">
              Whitepaper
            </Link>
            <Link 
              href="/login" 
              className="bg-[#7C3AED] text-white px-4 py-2 rounded-md hover:bg-[#6D28D9] transition-colors"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 