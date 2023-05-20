/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

import youtubeIcon from '@/assets/social/ico-social-youtube.png';
import { customerServiceListData } from '@/lib/customerServiceListData';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.root}>
      <section className={styles.content}>
        <div className={styles.start}>
          {' '}
          <article className={styles.intro}>
            <h1>FOREVERBETTER</h1>
            <p>
              FOREVERBETTER was founded in 2014 and is a brand based on fashion and expresses cultural communication.
              <br />
              The brand slogan 'but near missed things' implies our philosophy that we focus on the expression of any
              things that we missed in everyday.
              <br />
              We re-edit pictures, videos, space, design, art and objects in our way to suggest a new cultural
              experience.
              <br />
              <br />
              FOREVERBETTER pursues designing communication between all areas as our essential brand value.
            </p>
          </article>
          <article>
            <h2>Company Information</h2>
            <p>
              Company FOREVERBETTER | Business Name FIVE SPACE CO.,LTD | Business License 980-87-01757 | <br />
              MAIL-ORDER 173000 | Building 3, Kremlin park, Velikiy Novgorod, Russia <br />
              <br />
              Building 3, Kremlin park, Velikiy Novgorod, Russia
              <br />
              TEL. 02-792-2232 | Office hour Mon - Fri AM 10:00 - PM 5:00
              <br />
              <br />
              ©2023 FOREVERBETTER All Rights Reserved
            </p>
          </article>
        </div>
        <div className={styles.end}>
          <article className={styles.customer}>
            <h2>Customer Service</h2>
            <ul>
              {customerServiceListData.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </article>
          <article className={styles.social}>
            <h2>FOREVERBETTER SOCIAL</h2>
            <ul>
              <li>
                <Link href='/'>
                  <Image alt='Youtube' height={16} src={youtubeIcon} width={16} />
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </footer>
  );
}
