import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Home
        </h1>
        <img src="twitter_logo.png" alt="Hack a Tweet" width={120} height={120}/>
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Login</Link>
        
      </main>
    </div>
  );
}

export default Home;
