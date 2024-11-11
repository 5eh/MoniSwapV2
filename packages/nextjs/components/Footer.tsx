import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-4">
      <div className="mx-12 flex flex-col md:flex-row">
        <div className="navbar-start mb-2 md:mb-0 text-left">
          <p>&copy; Copyright 2024 MoniSwap. All rights reserved.</p>
        </div>
        <div className="navbar-center flex space-x-4 mb-2 justify-between md:mb-0">
          <Link href="#" className="hover:text-gray-300">
            Twitter
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Discord
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Telegram
          </Link>
        </div>
        <div className="navbar-end text-right">
          <p>The Unified Trading and Liquidity Marketplace for 🐻⛓️ </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
