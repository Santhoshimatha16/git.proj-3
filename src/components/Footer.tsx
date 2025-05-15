import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#232F3E] text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-3">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#FF9900] cursor-pointer">About Us</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Careers</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Press Releases</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Amazon Science</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Connect with Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#FF9900] cursor-pointer">Facebook</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Twitter</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Instagram</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#FF9900] cursor-pointer">Sell on Amazon</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Advertise Your Products</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Amazon Pay on Merchants</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#FF9900] cursor-pointer">Your Account</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Returns Centre</li>
              <li className="hover:text-[#FF9900] cursor-pointer">100% Purchase Protection</li>
              <li className="hover:text-[#FF9900] cursor-pointer">Help</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <div className="text-[#FF9900] font-bold text-2xl mb-2">
            amazon<span className="text-xs">.in</span>
          </div>
          <p className="text-xs text-gray-400">
            © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;