import React, { useEffect, useState } from 'react';
import { Frame, Gift } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<'frames' | 'gifts'>('frames');

  // Ensure default category on first load
  useEffect(() => {
    document.body.setAttribute('data-category', 'frames');
  }, []);

  const handleCategoryChange = (category: 'frames' | 'gifts') => {
    setActiveCategory(category);
    document.body.setAttribute('data-category', category);
  };

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse our collection of handcrafted frames and personalized gifts
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => handleCategoryChange('frames')}
            className={`category-tab flex items-center gap-2 ${
              activeCategory === 'frames'
                ? 'category-tab-active'
                : 'category-tab-inactive'
            }`}
          >
            <Frame className="w-4 h-4" />
            Photo Frames
          </button>

          <button
            onClick={() => handleCategoryChange('gifts')}
            className={`category-tab flex items-center gap-2 ${
              activeCategory === 'gifts'
                ? 'category-tab-active'
                : 'category-tab-inactive'
            }`}
          >
            <Gift className="w-4 h-4" />
            Gifts
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
