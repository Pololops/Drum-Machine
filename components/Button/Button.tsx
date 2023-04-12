import styles from './Button.module.css';

type PropsButton = {
  isActive?: boolean;
};

export const Button = ({ isActive }: PropsButton) => {
  const stylesButton =
    `${styles.button} ${isActive ? styles.on : styles.off}`;
  
  return <button className={stylesButton}></button>;
}
