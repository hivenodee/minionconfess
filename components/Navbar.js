// components/Navbar.js
"use client"; // Mark as Client Component for React hooks

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full md:w-auto">
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden mb-4 flex justify-end w-full">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {/* Hamburger or Close Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              // Close Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center w-full md:w-auto bg-black bg-opacity-70 md:bg-transparent p-4 md:p-0 rounded-md transition-all duration-300 ease-in-out`}
      >
        {/* CA Address */}
        <div className="text-white text-xs font-bold mb-4 md:mb-0">
          CA: DqWf9DDK6H5c7KmEHkNJxnzNPSM6mzxonZJjK6yxpump
        </div>

        {/* Twitter Link */}
        <a
          href="https://x.com/Jesus_Minion"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-12 md:w-32 md:h-12 flex items-center justify-center"
        >
          <Image
            src="/button.webp"
            alt="Twitter Button"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm md:text-base">
            Twitter
          </span>
        </a>

        {/* Dexscreener Link */}
        <a
          href="https://dexscreener.com/solana/4sz1x9vcdpqbz1cuuav4nivfykquxzjrbvgtp7anp9wh"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-12 md:w-32 md:h-12 flex items-center justify-center"
        >
          <Image
            src="/button.webp"
            alt="Dexscreener Button"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm md:text-base">
            Dexscreener
          </span>
        </a>

        {/* Confess Link */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeM6KIrXJFjETukrPu-1wWFHuxWGg-JbDKgmvi7jc7t-M3CQg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-12 md:w-32 md:h-12 flex items-center justify-center"
        >
          <Image
            src="/button.webp"
            alt="Confess Button"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm md:text-base">
            Confess
          </span>
        </a>
      </nav>
    </div>
  );
}
