'use client';

import Link from 'next/link';
import styles from './links.module.css';
import NavLink from './navLink/NavLink';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  {
    title: 'Homepage',
    path: '/',
  },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // temporary
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLink key={link.path} item={link} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: 'login', path: '/login' }} />
        )}
      </div>
      <Image
        alt=''
        onClick={() => setOpen((prev) => !prev)}
        src='/menu.png'
        width={30}
        height={30}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            return <NavLink key={link.path} item={link} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Links;
