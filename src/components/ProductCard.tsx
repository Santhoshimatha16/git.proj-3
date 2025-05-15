import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  rating: number;
  reviewCount: number;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  rating,
  reviewCount,
  category
}) => {
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} fill="#FFA41C" size={16} className="text-[#FFA41C]" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star size={16} fill="#FFA41C" className="text-[#FFA41C]" />
          <Star 
            size={16} 
            className="text-gray-300 absolute top-0 left-0" 
            style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }} 
          />
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} size={16} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-4">
        {category && (
          <div className="text-sm text-gray-500 mb-2">{category}</div>
        )}
        <div className="relative pb-[100%] mb-6 group">
          <img 
            src={image} 
            alt={title} 
            className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="font-medium text-sm mb-2 line-clamp-2 h-10 group-hover:text-[#FF9900]">{title}</h3>
        <div className="flex items-center mb-2">
          {renderRating()}
          <span className="text-xs text-gray-600 ml-2">({reviewCount.toLocaleString()})</span>
        </div>
        <div className="flex items-baseline mb-4">
          <span className="text-xs align-top">₹</span>
          <span className="text-2xl font-bold">{price}</span>
        </div>
        <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;