import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='/hero.gif' alt='' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className='bottom'>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          voluptate debitis tenetur rem provident facere. Impedit atque modi
          possimus, vero, excepturi repudiandae consequatur odit aspernatur
          molestias laborum necessitatibus iusto eveniet?
        </p>
        <Link href='/blog/post'>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
