import React from 'react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  backgroundColor?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ 
  title, 
  subtitle, 
  imageUrl,
  backgroundColor = 'bg-gradient-to-r from-[#fad7d0] to-[#fce6e1]'
}) => {
  return (
    <div className={`${backgroundColor} w-full py-12 relative overflow-hidden`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 z-10 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">{title}</h1>
          <h2 className="text-2xl md:text-3xl text-gray-800">{subtitle}</h2>
          <div className="mt-8 space-y-4">
            <img 
              src="https://m.media-amazon.com/images/G/31/img21/boat/anil/boAt_logo._CB649069253_.png" 
              alt="boAt" 
              className="h-12 inline-block mr-4 hover:opacity-90 transition-opacity" 
            />
            <img 
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" 
              alt="Other brands" 
              className="h-12 inline-block hover:opacity-90 transition-opacity" 
            />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-3xl"></div>
          <img 
            src={imageUrl} 
            alt="Featured products" 
            className="max-w-full h-auto object-contain z-10 transition-all duration-300 hover:scale-105 hover:drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;