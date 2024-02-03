import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = ({ params, searchParams }) => {
  // server side navigation
  console.log(searchParams);
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
