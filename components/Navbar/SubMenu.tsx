import styles from './Navbar.module.css';

type SubMenuProps = {
  children: React.ReactNode;
};

const SubMenu = ({children}: SubMenuProps) => {
  return <ul className={styles.submenu}>{children}</ul>;
};

export default SubMenu;
