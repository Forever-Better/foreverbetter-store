import Image from 'next/image';

export default function Gallery({ data }: { data: string[] }) {
  return (
    <div className='w-2/4'>
      {data.map((image, i) => (
        <Image
          key={i}
          alt='Product'
          height={0}
          priority={i === 0}
          sizes='50vw'
          src={image}
          style={{ width: '100%', height: 'auto' }}
          width={0}
        />
      ))}
    </div>
  );
}
