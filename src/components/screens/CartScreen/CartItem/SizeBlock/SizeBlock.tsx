import type { CartItem } from '@/types/cart-data.interface';

interface SizeBlockProps {
  data: CartItem['size'];
  selectedSize: CartItem['selectedSize'];
}

export default function SizeBlock({ data, selectedSize }: SizeBlockProps) {
  return (
    <div>
      <label htmlFor='size-select'>
        Size
        <select className='ml-2' defaultValue={selectedSize.toUpperCase()} id='size-select'>
          {data.map(({ enabled, size }, i) => enabled && <option key={i}>{size.toUpperCase()}</option>)}
        </select>
      </label>
    </div>
  );
}
