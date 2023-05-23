import ColorInfo from '@/components/ColorInfo/ColorInfo';
import type { Product } from '@/types/product.interface';

export default function ColorBlock({ data }: { data: Pick<Product, 'color' | 'availableColors'> }) {
  return <ColorInfo data={data} />;
}
