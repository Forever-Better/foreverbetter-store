/* eslint-disable react/no-unescaped-entities */

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import newCollection from '@/assets/new_collection.jpg';
import secondCollection from '@/assets/second_collection.jpg';
import ArrowButton from '@/components/common/ArrowButton/ArrowButton';

import styles from './HomeScreen.module.scss';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <section>
      <article>
        <div className={styles.cont}>
          <Image
            priority
            alt='New collection'
            height={0}
            quality={100}
            sizes='100vw'
            src={newCollection}
            style={{ width: '100%', height: 'auto' }}
            width={0}
          />
          <div className={styles.info}>
            <h2 className='mb-2'>
              The 2 <sup>nd</sup> drop of 23SS ‘Through Editism’ Collection
            </h2>
            <ArrowButton onClick={() => router.push('/category/a')}>View Product</ArrowButton>
          </div>
        </div>
        <div className={styles.cont}>
          <div className={clsx(styles.info, 'text-white')}>
            <h2 className='mb-2'>FOREVERBETTER's first sneaker, 'Log' collection</h2>
            <div className='flex flex-col gap-2'>
              <ArrowButton>Discover more</ArrowButton>
              <ArrowButton>View Product</ArrowButton>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full'
            src='https://player.vimeo.com/progressive_redirect/playback/815223788/rendition/720p/file.mp4?loc=external&signature=a902ee35f074bbe4201b5ca381c8b70f4b1c1994fdf3a7688465816e065a6f4f'
          />
        </div>
        <div className={styles.cont}>
          <Image
            alt='Second collection'
            height={0}
            quality={100}
            sizes='100vw'
            src={secondCollection}
            style={{ width: '100%', height: 'auto' }}
            width={0}
          />
          <div className={clsx(styles.info, 'text-white')}>
            <h2 className='mb-2'>NEW LINE ‘Significant’</h2>
            <div className='flex flex-col gap-2'>
              <ArrowButton>View Product</ArrowButton>
              <ArrowButton>Watch Full Editorial</ArrowButton>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
