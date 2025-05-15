import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';

interface ProductCategoryProps {
  title: string;
  products: Product[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ title, products }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;