import React from 'react';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import HeroBanner from './components/HeroBanner';
import ProductCategory from './components/ProductCategory';
import Footer from './components/Footer';
import { productData } from './data/products';

function App() {
  const headphones = productData.filter(p => p.category === 'Headphones');
  const homeAppliances = productData.filter(p => p.category === 'Home Appliances');
  const homeDecor = productData.filter(p => p.category === 'Home Decor');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <SubNav />
      
      <HeroBanner 
        title="Under ₹1,499" 
        subtitle="Budget friendly headphones" 
        imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Boat/Boat_Aud_GW_1500x600._CB592209196_.jpg"
      />
      
      <div className="container mx-auto px-4 py-8">
        <ProductCategory title="Starting ₹149 | Headphones" products={headphones} />
        
        <ProductCategory title="Appliances for your home | Up to 55% off" products={homeAppliances} />
        
        <ProductCategory title="Revamp your home in style" products={homeDecor} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;