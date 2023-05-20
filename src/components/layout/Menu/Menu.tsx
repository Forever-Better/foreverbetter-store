'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { getPublicUrl } from '@/helpers/getPublicUrl';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { dropdownMenuData } from '@/lib/dropdownMenuData';

import MenuDropdown from '../MenuDropdown/MenuDropdown';
import Swiper from '../MenuDropdown/Swiper/Swiper';

export default function Menu() {
  const ref = useRef(null);

  const pathname = usePathname();
  const [visible, setVisible] = useState<string | boolean>(false);

  useEffect(
    () => () => {
      setVisible(false);
    },
    [pathname]
  );

  useOutsideClick(ref, () => setVisible(false));

  return (
    <div ref={ref} className='text-left'>
      <ul className='flex gap-14'>
        {dropdownMenuData.map(({ gallery, items, label }) => (
          <li key={label} className='font-medium text-sm m-0'>
            <button
              className={clsx(
                visible === label ? 'after:content-["-"]' : 'after:content-["+"]',
                'after:absolute  after:-right-0 relative pr-4'
              )}
              onClick={() => setVisible((v) => (v === label ? false : label))}
            >
              {label}
            </button>
            <MenuDropdown setVisible={setVisible} visible={visible === label}>
              <MenuDropdown.Columns>
                {items.map(({ header: { label }, items }) => (
                  <MenuDropdown.Column>
                    <MenuDropdown.ColumnHeader
                      className={clsx(label === 'All' && 'underline')}
                      href={getPublicUrl.category([label])}
                    >
                      {label}
                    </MenuDropdown.ColumnHeader>
                    {items.map(({ label }) => (
                      <MenuDropdown.ColumnItem key={label} href={getPublicUrl.category([label])}>
                        {label}
                      </MenuDropdown.ColumnItem>
                    ))}
                  </MenuDropdown.Column>
                ))}
              </MenuDropdown.Columns>
              <MenuDropdown.Gallery type={gallery.type}>
                {gallery.type === 'static' ? (
                  gallery?.items.map(({ image, label }) => (
                    <MenuDropdown.GalleryItem
                      key={label}
                      href={getPublicUrl.category([label])}
                      image={image}
                      label={label}
                    />
                  ))
                ) : (
                  <Swiper items={gallery.items} />
                )}
              </MenuDropdown.Gallery>
            </MenuDropdown>
          </li>
        ))}
      </ul>
    </div>
  );
}
