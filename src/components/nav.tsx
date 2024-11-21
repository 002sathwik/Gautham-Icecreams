import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav   
     className=" bg-gradient-to-r from-pink-700  to-yellow-500 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              width={64}
              height={40}
              src="/2t.png"
              alt="Logo"
            />
           
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 font-sora text-white">
            <a
              href="#flavours"
              className=" hover:text-gray-900 font-medium"
            >
              Flavours
            </a>
            <a
              href="#address"
              className=" hover:text-gray-900 font-medium"
            >
              Address
            </a>
            <a
              href="#orders"
              className=" hover:text-gray-900 font-medium"
            >
              Orders
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <a
              href="#flavours"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Flavours
            </a>
            <a
              href="#address"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Address
            </a>
            <a
              href="#orders"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Orders
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
