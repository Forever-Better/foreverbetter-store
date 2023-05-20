import Link from 'next/link';

import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';
import { getPublicUrl } from '@/helpers/getPublicUrl';

import styles from './Nav.module.scss';

interface NavProps {
  slug: string[];
  sortItems: string[];
}

export default function Nav({ slug, sortItems }: NavProps) {
  return (
    <div className={styles.root}>
      {' '}
      <nav className={styles.nav}>
        <div className='container'>
          <ul className={styles.navList}>
            {slug.map((item, i) => (
              <li key={item} className={styles.listItem}>
                <Link className={styles.navItem} href={`${getPublicUrl.category([...slug.splice(0, i), item])}`}>
                  {capitalizeFirstLetter(item)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={styles.sub}>
        <div className='container'>
          <ul className={styles.sortList}>
            {sortItems?.map((item) => (
              <li key={item} className={styles.listItem}>
                <Link className={styles.sortItem} href={`${slug.join('/')}/${item}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
