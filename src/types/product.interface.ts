interface Size {
  size: string;
  enabled: boolean;
}

interface Color {
  color: string;
  value: string;
}

export interface AvailableColor {
  color: string;
  value: string;
  productId: Product['id'];
}

interface Material {
  material: string;
  value: number;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  salePrice: string;
  size: Size[];
  color: Color;
  availableColors: AvailableColor[];
  material: Material[];
  mainImage: string;
  images: string[];
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}
