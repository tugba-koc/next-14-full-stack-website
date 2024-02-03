import Image from 'next/image';
import styles from './singlePost.module.css';

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='/about.png' alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            width={30}
            height={30}
            className={styles.avatar}
            src='/about.png'
            alt=''
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>title</span>
            <span className={styles.detailValue}>detail value</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ea,
          ratione perferendis molestias beatae ut illo facilis nobis et, eveniet
          non sed totam fuga quis sit amet blanditiis est deserunt!
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
