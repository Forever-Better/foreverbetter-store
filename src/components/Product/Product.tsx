import Image from 'next/image';

export default function Product({ data }: { data: any }) {
  return (
    <div className='relative'>
      <Image
        alt={data.title}
        height={0}
        priority={data.id <= 4}
        quality={100}
        sizes='50vw'
        src={data.cover}
        style={{ width: '100%', height: '100%' }}
        width={0}
      />
      <div className='absolute bottom-0 text-sm px-3 py-2 flex flex-col justify-center w-full'>
        <div className='font-medium'>{data.title}</div>
        <div className='font-light flex justify-between'>
          <div className='flex items-center gap-2'>
            <span>{data.colors[0]}</span>
            <span className='flex gap-1'>
              {data.colors.map((color: string) => (
                <span className='w-[10px] h-[10px]' style={{ backgroundColor: color }} />
              ))}
            </span>
          </div>
          <span className='text-sm'>{data.price}</span>
        </div>
      </div>
    </div>
  );
}
