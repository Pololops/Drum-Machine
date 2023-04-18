import styles from './Navbar.module.css';
import Link from 'next/link';
import SubMenu from './SubMenu';

export default function Navbar() {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about">About</Link>
        </li>
        <li className={`${styles.link} ${styles.linkSubmenu}`}>
          Drumkits
          <SubMenu>
            <li className={`${styles.link} ${styles.sublink}`}>
              <Link href="/games/1">Acoustic</Link>
            </li>
            <li className={`${styles.link} ${styles.sublink}`}>
              <Link href="/games/2">Rock</Link>
            </li>
          </SubMenu>
        </li>
      </ul>
    </>
  );
}
