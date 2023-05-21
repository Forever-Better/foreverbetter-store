interface QuantityBlockProps {
  quantity: number;
  maxQuantity: number;
}

export default function QuantityBlock({ maxQuantity, quantity }: QuantityBlockProps) {
  const quantityArr = Array.from({ length: maxQuantity }, (_, i) => i + 1);

  return (
    <div>
      <label htmlFor='quantity-select'>
        Quantity
        <select className='ml-2' defaultValue={quantity} id='quantity-select'>
          {quantityArr.map((size, i) => (
            <option key={i}>{size}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
