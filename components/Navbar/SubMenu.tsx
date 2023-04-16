import styles from './Navbar.module.css';

type SubMenuProps = {
  children: React.ReactNode;
};

export default function SubMenu({children}: SubMenuProps) {
  return <ul className={styles.submenu}>{children}</ul>;
}
