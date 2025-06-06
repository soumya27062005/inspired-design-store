
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Download } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  downloads: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border bg-card overflow-hidden">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img 
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 hover:bg-green-600 text-white">
                New
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                Bestseller
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-red-500 hover:bg-red-600 text-white">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Quick Action Button */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/90 hover:bg-white">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3">
            <Badge variant="secondary" className="bg-black/50 text-white hover:bg-black/60">
              {product.category}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {product.title}
          </h3>
          
          {/* Rating and Downloads */}
          <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span>{product.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              <span>{product.downloads.toLocaleString()}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button className="flex-1 rounded-full">
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
