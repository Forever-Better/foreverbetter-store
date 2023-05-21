interface SizeBlockProps {
  data: string[];
  selectedSize: string;
}

export default function SizeBlock({ data, selectedSize }: SizeBlockProps) {
  return (
    <div>
      <label htmlFor='size-select'>
        Size
        <select className='ml-2' defaultValue={selectedSize.toUpperCase()} id='size-select'>
          {data.map((size, i) => (
            <option key={i}>{size.toUpperCase()}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
