
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'Premium Fonts',
      description: 'Unique typefaces for your designs',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      itemCount: '250+ fonts',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Website Templates',
      description: 'Modern, responsive web designs',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      itemCount: '150+ templates',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Clothing Designs',
      description: 'Trendy apparel graphics',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      itemCount: '300+ designs',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      id: 4,
      title: 'Coding Projects',
      description: 'Ready-to-use code solutions',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      itemCount: '100+ projects',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need to bring your creative vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-border bg-card"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <span className="text-sm font-medium text-primary">
                    {category.itemCount}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
