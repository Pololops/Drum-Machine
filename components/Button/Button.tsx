import {useMemo, useState} from 'react';
import styles from './Button.module.css';

type PropsButton = {
  onClick: () => void;
};

const Button = ({onClick}: PropsButton) => {
  const [isActive, setIsActive] = useState(false);

  const stylesButton = `${styles.button} ${isActive ? styles.on : styles.off}`;

  return (
    <button
      className={stylesButton}
      onClick={() => {
        onClick();
        setIsActive((prevState) => !prevState);
      }}
    />
  );
};

export default Button;
