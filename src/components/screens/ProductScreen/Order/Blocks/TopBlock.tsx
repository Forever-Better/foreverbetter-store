import React from 'react';

import ColorBlock from './ColorBlock';

export default function TopBlock({ colors, price, title }: { colors: string[]; title: string; price: number }) {
  return (
    <div>
      {' '}
      <div className='flex justify-between items-center'>
        <h1 className='text-sm font-normal'>{title}</h1>
        <span>{price}</span>
      </div>
      <ColorBlock data={colors} />
    </div>
  );
}
