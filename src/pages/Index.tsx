
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedCategories />
      <ProductSection 
        title="Trending Designs" 
        subtitle="Discover what's popular in the creative community"
        type="trending"
      />
      <ProductSection 
        title="New Arrivals" 
        subtitle="Fresh designs and templates just added"
        type="new"
      />
      <ProductSection 
        title="Best Sellers" 
        subtitle="Top-rated products loved by creators"
        type="bestsellers"
      />
      <Footer />
    </div>
  );
};

export default Index;
