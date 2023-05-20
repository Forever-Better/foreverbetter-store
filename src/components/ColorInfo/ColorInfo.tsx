export default function ColorInfo({ data }: { data: string[] }) {
  return (
    <div className='flex items-center gap-2'>
      <span className='font-light'>{data[0]}</span>
      <span className='flex gap-1'>
        {data.map((color) => (
          <span className='w-[10px] h-[10px]' style={{ backgroundColor: color }} />
        ))}
      </span>
    </div>
  );
}
