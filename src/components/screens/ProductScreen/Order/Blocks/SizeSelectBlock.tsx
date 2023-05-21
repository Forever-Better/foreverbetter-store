import clsx from 'clsx';

interface SizeSelectBlockProps {
  data: string[];
  error: boolean;
  selectedSize: string | undefined;
  onSelectSize: (size: string) => void;
}

export default function SizeSelectBlock({ data, error, onSelectSize, selectedSize }: SizeSelectBlockProps) {
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
        {error && (
          <span className='text-error' role='alert'>
            Please, select a size.
          </span>
        )}
      </ul>
    </div>
  );
}
