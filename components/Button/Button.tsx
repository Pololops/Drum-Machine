import {useEffect, useState} from 'react';
import styles from './Button.module.css';

type PropsButton = {
  play: () => void;
  isReset: boolean;
};

export default function Button({play, isReset}: PropsButton) {
  const [isActive, setIsActive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isButtonLight = isActive || isPressed;
  const stylesButton = `${styles.button} ${isButtonLight ? styles.on : ''}`;

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };
  const handleMouseDown = () => {
    if (!isActive) play();
  };

  useEffect(() => {
    if (isReset) setIsActive(false);
  }, [isReset]);

  return (
    <button
      className={stylesButton}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    />
  );
}
