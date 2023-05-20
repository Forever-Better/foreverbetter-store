import React from 'react';

export default function MaterialBlock({ data }: { data: string[] }) {
  return (
    <div className='flex'>
      <span className='w-40'>Material</span>
      <ul className='flex flex-col gap-2'>
        {data.map(({ name, value }, i) => (
          <li key={i} className='text-xs flex gap-1'>
            <span>{name}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
