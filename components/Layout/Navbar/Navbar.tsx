import styles from './Navbar.module.css';
import Link from 'next/link';
import SubMenu from './SubMenu';

const Navbar = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.link}>
          <Link href="/">Accueil</Link>
        </li>
        <li className={`${styles.link} ${styles.linkSubmenu}`}>
          Games
          <SubMenu>
            <li className={`${styles.link} ${styles.sublink}`}>
              <Link href="/games/1">Drums Pattern</Link>
            </li>
            <li className={`${styles.link} ${styles.sublink}`}>
              <Link href="/games/2">Labyrinthe</Link>
            </li>
            <li className={`${styles.link} ${styles.sublink}`}>
              <Link href="/games/3">Scrabble</Link>
            </li>
          </SubMenu>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
