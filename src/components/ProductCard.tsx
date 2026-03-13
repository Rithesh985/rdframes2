import React, { useState } from 'react';
import { ShoppingCart, Plus, Check, Sparkles } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

type LaminationType = 'glassy' | 'glitter' | 'matte';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0]?.size || ''
  );
  const [withLamination, setWithLamination] = useState(false);
  const [laminationType, setLaminationType] =
    useState<LaminationType>('glassy');
  const [isAdded, setIsAdded] = useState(false);

  const selectedSizeData = product.sizes?.find(
    (s) => s.size === selectedSize
  );

  const basePrice = selectedSizeData?.price || product.basePrice || 0;
  const laminationPrice = withLamination
    ? selectedSizeData?.laminationPrice || 0
    : 0;

  const currentPrice = basePrice + laminationPrice;

  const hasLamination =
    product.category === 'frames' && !!selectedSizeData?.laminationPrice;

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize || undefined,
      currentPrice,
      withLamination,
      withLamination ? laminationType : undefined
    );

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="product-card group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isAdded
              ? 'bg-green-500 text-primary-foreground'
              : 'bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
          }`}
        >
          {isAdded ? (
            <Check className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Size selector */}
        {product.sizes && (
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">Select Size:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size.size}
                  onClick={() => setSelectedSize(size.size)}
                  className={`px-3 py-1.5 text-xs rounded-full transition-all duration-200 ${
                    selectedSize === size.size
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lamination checkbox */}
        {hasLamination && (
          <div className="mb-4 space-y-2">
            <label
              className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                withLamination
                  ? 'border-primary bg-primary/10'
                  : 'border-muted bg-muted/50 hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  Add Lamination
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  +₹{selectedSizeData?.laminationPrice}
                </span>
                <input
                  type="checkbox"
                  checked={withLamination}
                  onChange={(e) =>
                    setWithLamination(e.target.checked)
                  }
                />
              </div>
            </label>

            {/* Lamination dropdown */}
            {withLamination && (
              <select
                value={laminationType}
                onChange={(e) =>
                  setLaminationType(e.target.value as LaminationType)
                }
                className="w-full px-3 py-2 border rounded-lg text-sm bg-background"
              >
                <option value="glassy">Glassy</option>
                <option value="glitter">Glitter</option>
                <option value="matte">Matte</option>
              </select>
            )}
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-foreground">
              ₹{currentPrice}
            </span>
            {product.sizes && (
              <div className="text-xs text-muted-foreground">
                {selectedSize}
                {withLamination && (
                  <span className="text-primary ml-1">
                    + {laminationType} lamination
                  </span>
                )}
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="inline-flex items-center gap-2 btn-primary py-2 px-4 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
