import { Product } from '@/types/product';

// Types of Lamination
export type LaminationType = 'glassy' | 'glitter' | 'matte';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  withLamination?: boolean;
  laminationType?: LaminationType;
  price: number;
}


// Import images
import frameMosics from '@/assets/frame-mosics.jpeg';
import frameSecretEye from '@/assets/frame-secret-eyes.jpeg';
import frameLoveAgreement from '@/assets/frame-love-agreement.jpeg';
import framePolaroid from '@/assets/frame-polaroid.jpeg';
import frameMini from '@/assets/frame-mini.jpeg';
import frameBirthday from '@/assets/frame-birthday.jpg';
import frameBestFriendContract from '@/assets/frame-bfc.jpg';

import giftMagazine from '@/assets/gift-magazine.jpg';
import giftPremiumWalletCard from '@/assets/gift-wallet-card.jpg';
import giftHomeDecarative from '@/assets/gift-home-decarative-items.jpg';
import giftSpiritual from '@/assets/gift-spiritual.jpg';
import giftCustomDecorativePhotos from '@/assets/gift-custom-decoration-photos.jpg';
import giftPoloraid from '@/assets/gift-poloraid-photos.jpg';
import giftWalletCard from '@/assets/gift-wallet-card.jpg';
import giftMagicMirror from '@/assets/gift-magic-mirror.jpg';
import giftMagicMirrorBlack from '@/assets/gift-magic-mirror-black-circle.jpg';

export const products: Product[] = [
  // Photo Frames
  {
    id: 'frame-1',
    name: 'Mosics Frame',
    description: 'Elegant wooden frame perfect for cherishing your precious memories',
    image: frameMosics,
    category: 'frames',
    sizes: [
      { size: '10x12"', price: 449, laminationPrice: 50 },
      { size: '12x15"', price: 559, laminationPrice: 60 },
      { size: '12x18"', price: 669, laminationPrice: 70 },
      { size: '16x20"', price: 1299, laminationPrice: 90 },
      //{ size: '16x24"', price: 1599, laminationPrice: 120 },
    ],
  },
  {
    id: 'frame-2',
    name: 'Secret Eye Frame',
    description: 'Sleek and contemporary acrylic frame for a modern touch',
    image: frameSecretEye,
    category: 'frames',
    sizes: [
      { size: '4x4"', price: 149, laminationPrice: 10 },
      { size: '4x6"', price: 199, laminationPrice: 1 },
      { size: '6x8"', price: 249, laminationPrice: 20 },
      { size: '8x10"', price: 349, laminationPrice: 20 },
      { size: '8x12"', price: 449, laminationPrice: 40 },
      { size: '10x12"', price: 549, laminationPrice: 50 },
      { size: '12x15"', price: 699, laminationPrice: 60 },
      { size: '12x18"', price: 849, laminationPrice: 70 },
      { size: '16x20"', price: 1499, laminationPrice: 90 },
    ],
  },
  {
    id: 'frame-3',
    name: 'Love Agreement Frame',
    description: 'Ornate gold-finished frame for a royal, timeless look',
    image: frameLoveAgreement,
    category: 'frames',
    sizes: [
      { size: '4x6"', price: 249, laminationPrice: 10 },
      { size: '6x8"', price: 349, laminationPrice: 20 },
      { size: '8x10"', price: 449, laminationPrice: 20 },
      { size: '8x12"', price: 549, laminationPrice: 40 },
      { size: '10x12"', price: 699, laminationPrice: 50 },
      { size: '12x15"', price: 849, laminationPrice: 60 },
      { size: '16x20"', price: 1699, laminationPrice: 90 },
    ],
  },
  {
    id: 'frame-4',
    name: 'Polaroid Frame',
    description: 'Multi-photo frame to showcase your favorite moments together',
    image: framePolaroid,
    category: 'frames',
    sizes: [
      { size: 'Small (4 photos)', price: 599, laminationPrice: 40 },
      { size: 'Medium (6 photos)', price: 799, laminationPrice: 60 },
      { size: 'Large (9 photos)', price: 1099, laminationPrice: 90 },
    ],
  },
  {
    id: 'frame-5',
    name: 'Mini Frame',
    description: 'Multi-photo frame to showcase your favorite moments together',
    image: frameMini,
    category: 'frames',
    sizes: [
     { size: '4x4"', price: 149, laminationPrice: 10 },
    ],
  },
    {
    id: 'frame-6',
    name: 'Birthday Frame',
    description: 'Multi-photo frame to showcase your favorite moments together',
    image: frameBirthday,
    category: 'frames',
    sizes: [
      { size: '8x10"', price: 449, laminationPrice: 20 },
      { size: '8x12"', price: 549, laminationPrice: 40 },
      { size: '10x12"', price: 699, laminationPrice: 50 },
      { size: '12x15"', price: 849, laminationPrice: 60 },
      { size: '16x20"', price: 1699, laminationPrice: 90 },,
    ],
  },
  {
    id: 'frame-7',
    name: 'Best Friend Contract Frame',
    description: 'Multi-photo frame to showcase your favorite moments together',
    image: frameBestFriendContract,
    category: 'frames',
    sizes: [
   { size: '8x10"', price: 449, laminationPrice: 20 },
      { size: '8x12"', price: 549, laminationPrice: 40 },
      { size: '10x12"', price: 699, laminationPrice: 50 },
      { size: '12x15"', price: 849, laminationPrice: 60 },
      { size: '16x20"', price: 1699, laminationPrice: 90 },
    ],
  },




  // Gifts
  {
    id: 'gift-1',
    name: 'Memorable Magazine',
    description: 'A personalized magazine featuring your special moments and stories',
    image: giftMagazine,
    category: 'gifts',
    basePrice: 799,
  },
  {
    id: 'gift-2',
    name: 'Premium Wallet Cards',
    description: 'Transform your photos into memorable wallet cards',
    image: giftPremiumWalletCard,
    category: 'gifts',
    basePrice: 199,
  },
  {
    id: 'gift-3',
    name: 'Buddha Statue',
    description: 'High-quality home decarative statue',
    image: giftHomeDecarative,
    category: 'gifts',
    basePrice: 249,
  },
  {
    id: 'gift-4',
    name: 'Spriritual Gift',
    description: 'Classic Ganesh Car Stand',
    image: giftSpiritual,
    category: 'gifts',
    basePrice: 399,
  },
  {
    id: 'gift-5',
    name: 'Custome Decarative Photos',
    description: 'A beautifully designed love contract to seal your bond forever',
    image: giftCustomDecorativePhotos,
    category: 'gifts',
    basePrice: 10,
  },
  {
    id: 'gift-6',
    name: 'Custom Poloraid Photo',
    description: 'Special moments',
    image: giftPoloraid,
    category: 'gifts',
    basePrice: 199,
  },
  {
    id: 'gift-7',
    name: 'Wallet Card',
    description: 'Carry your loved ones everywhere!',
    image: giftWalletCard,
    category: 'gifts',
    basePrice: 149,
  },
  {
    id: 'gift-8',
    name: 'Magic Mirror Heart Shape',
    description: 'Illuminate your room with your favorite memories',
    image: giftMagicMirror,
    category: 'gifts',
    basePrice: 799,
  },
  {
    id: 'gift-9',
    name: 'Magic Mirror Black',
    description: 'Illuminate your room with your favorite memories',
    image: giftMagicMirrorBlack,
    category: 'gifts',
    basePrice: 599,
  },

];
