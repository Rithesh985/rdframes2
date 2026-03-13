import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '@/types/product';

type LaminationType = 'glassy' | 'glitter' | 'matte';

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    selectedSize?: string,
    price?: number,
    withLamination?: boolean,
    laminationType?: LaminationType
  ) => void;
  removeFromCart: (
    productId: string,
    selectedSize?: string,
    withLamination?: boolean,
    laminationType?: LaminationType
  ) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    selectedSize?: string,
    withLamination?: boolean,
    laminationType?: LaminationType
  ) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (
    product: Product,
    selectedSize?: string,
    price?: number,
    withLamination?: boolean,
    laminationType?: LaminationType
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.withLamination === withLamination &&
          item.laminationType === laminationType
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      const itemPrice = price || product.basePrice || 0;

      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedSize,
          withLamination,
          laminationType,
          price: itemPrice,
        },
      ];
    });
  };

  const removeFromCart = (
    productId: string,
    selectedSize?: string,
    withLamination?: boolean,
    laminationType?: LaminationType
  ) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === selectedSize &&
            item.withLamination === withLamination &&
            item.laminationType === laminationType
          )
      )
    );
  };

  const updateQuantity = (
    productId: string,
    quantity: number,
    selectedSize?: string,
    withLamination?: boolean,
    laminationType?: LaminationType
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize, withLamination, laminationType);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId &&
        item.selectedSize === selectedSize &&
        item.withLamination === withLamination &&
        item.laminationType === laminationType
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
