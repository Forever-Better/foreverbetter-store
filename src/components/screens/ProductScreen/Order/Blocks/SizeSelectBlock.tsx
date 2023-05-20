import clsx from 'clsx';

interface SizeSelectBlockProps {
  data: string[];
  selectedSize: string | undefined;
  onSelectSize: (size: string) => void;
}

export default function SizeSelectBlock({ data, onSelectSize, selectedSize }: SizeSelectBlockProps) {
  return (
    <div className='flex'>
      <span className='w-40 font-normal'>Size</span>
      <ul className='flex gap-4'>
        {data.map((size, i) => (
          <li key={i}>
            <button
              className={clsx(selectedSize === size && 'border-black border-solid px-[3px] border')}
              onClick={() => onSelectSize(size)}
            >
              {size.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
