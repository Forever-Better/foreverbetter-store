import Image from 'next/image';
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.scss';

interface MenuSwiperProps {
  items: { image: string; label: string; href: string }[];
}
export default function MenuSwiper({ items }: MenuSwiperProps) {
  return (
    <Swiper
      loop
      autoplay={{ delay: 2000 }}
      className='mySwiper w-40'
      modules={[Pagination, Autoplay]}
      pagination={{
        dynamicBullets: true
      }}
    >
      {items.map(({ href, image, label }) => (
        <SwiperSlide key={label}>
          <Link className='flex flex-col gap-3 justify-center' href={href}>
            <Image alt={label} height={200} quality={100} src={image} width={160} />
            <span className='mt-3 text-center'>{label}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
