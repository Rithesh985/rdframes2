export interface ProductSize {
  size: string;
  price: number;
  laminationPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'frames' | 'gifts';
  basePrice?: number;
  sizes?: ProductSize[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  withLamination?: boolean;
  price: number;
}
