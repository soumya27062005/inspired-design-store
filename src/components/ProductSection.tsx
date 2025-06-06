
import React from 'react';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  type: 'trending' | 'new' | 'bestsellers';
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, subtitle, type }) => {
  // Mock product data
  const getProducts = (type: string) => {
    const baseProducts = [
      {
        id: 1,
        title: 'Modern Sans Font Family',
        category: 'Fonts',
        price: 29.99,
        originalPrice: 39.99,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop',
        rating: 4.8,
        downloads: 1250,
        isNew: type === 'new',
        isBestseller: type === 'bestsellers'
      },
      {
        id: 2,
        title: 'E-commerce Website Template',
        category: 'Templates',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
        rating: 4.9,
        downloads: 890,
        isNew: type === 'new',
        isBestseller: type === 'bestsellers'
      },
      {
        id: 3,
        title: 'Minimalist T-Shirt Design',
        category: 'Clothing',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop',
        rating: 4.7,
        downloads: 2100,
        isNew: type === 'new',
        isBestseller: type === 'bestsellers'
      },
      {
        id: 4,
        title: 'React Dashboard Components',
        category: 'Code',
        price: 59.99,
        originalPrice: 79.99,
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
        rating: 4.9,
        downloads: 645,
        isNew: type === 'new',
        isBestseller: type === 'bestsellers'
      }
    ];

    return baseProducts;
  };

  const products = getProducts(type);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200">
            View All {title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
