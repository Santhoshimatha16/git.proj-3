import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [location, setLocation] = useState('Chennai 600042');

  return (
    <header className="bg-[#131921] text-white">
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-white font-bold text-2xl mr-2">
            <span className="text-[#FF9900]">amazon</span>
            <span className="text-xs text-[#FF9900]">.in</span>
          </div>
        </Link>

        {/* Location */}
        <div className="hidden md:flex items-center text-sm mr-2">
          <div className="flex flex-col">
            <span className="text-gray-300 text-xs">Delivering to {location}</span>
            <button className="flex items-center font-bold">
              <span>Update location</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="w-full md:w-auto flex-grow md:flex-grow-0 flex mt-2 md:mt-0 order-3 md:order-none">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <select className="h-full rounded-l-md border-0 bg-gray-200 py-0 pl-2 pr-7 text-gray-700 focus:ring-0">
                <option>All</option>
              </select>
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-2 pl-20 pr-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF9900]"
              placeholder="Search Amazon.in"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button className="h-full bg-[#FF9900] px-4 rounded-r-md hover:bg-[#e68a00] transition-colors">
                <Search size={20} className="text-gray-800" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4 md:space-x-6 order-2 md:order-none">
          {/* Account */}
          <div className="hidden md:block">
            <div className="flex flex-col text-sm">
              <span className="text-gray-300 text-xs">Hello, sign in</span>
              <div className="flex items-center font-bold">
                <span>Account & Lists</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          {/* Returns & Orders */}
          <div className="hidden md:block">
            <div className="flex flex-col text-sm">
              <span className="text-gray-300 text-xs">Returns</span>
              <span className="font-bold">& Orders</span>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <ShoppingCart size={24} className="text-white" />
            <div className="ml-1">
              <span className="text-[#FF9900] font-bold">0</span>
              <span className="hidden md:inline ml-1 font-bold">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;