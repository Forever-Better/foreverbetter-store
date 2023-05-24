import type { Product } from './product.interface';

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export type CartData = CartItem[];
