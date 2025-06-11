import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 100);
  }, []);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1
            className={`text-5xl font-bold text-[#1F2937] mb-6 transition-all duration-700 ease-out
              ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
            `}
          >
            Building the future of payments together
          </h1>

          {/* Subheader */}
          <p className="text-xl text-gray-600 mb-8">
            Where wallets, merchants and payment gateways join forces to scale stablecoin payments to the first billion users.
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4 mb-16">
            <Link
              href="/apply"
              className="bg-[#7C3AED] text-white px-6 py-3 rounded-md shadow-sm hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2"
            >
              Apply for Partnership
            </Link>
            <Link
              href="/demo"
              className="border-2 border-[#7C3AED] text-[#7C3AED] px-6 py-3 rounded-md hover:bg-[#7C3AED] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2"
            >
              Whitepaper
            </Link>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center space-x-5 opacity-70">
            <div className="h-20 w-40 relative">
              <Image
                src="/logos/rainbow.png"
                alt="Rainbow Partner Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-20 w-40 relative">
              <Image
                src="/logos/Sprintcheckout logo.png"
                alt="Sprintcheckout Partner Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 