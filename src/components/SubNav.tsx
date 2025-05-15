import React from 'react';
import { Menu } from 'lucide-react';

const SubNav: React.FC = () => {
  const categories = [
    'All',
    'Fresh',
    'MX Player',
    'Sell',
    'Bestsellers',
    "Today's Deals",
    'Mobiles',
    'Fashion',
    'Customer Service',
    'Prime',
    'New Releases',
    'Electronics',
    'Home & Kitchen',
    'Amazon Pay'
  ];

  return (
    <nav className="bg-[#232F3E] text-white py-2 overflow-x-auto scrollbar-hide">
      <div className="container mx-auto px-4 flex items-center space-x-4">
        <div className="flex items-center">
          <Menu size={20} className="mr-1" />
          <span className="font-bold">All</span>
        </div>
        
        {categories.slice(1).map((category, index) => (
          <div key={index} className="whitespace-nowrap cursor-pointer hover:text-[#FF9900] transition-colors">
            {category}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SubNav;