import {MouseEvent} from 'react';
import styles from './InputTicks.module.css';

type InputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function InputTicks({value, onChange}: InputProps) {
  const changeValue = (
    event: MouseEvent<HTMLButtonElement>,
    upOrDown: 'down' | 'up'
  ) => {
    event.preventDefault();
    const newValue = upOrDown === 'down' ? value / 2 : value * 2;
    if (newValue < 2 || newValue > 8) return;
    onChange(newValue);
  };

  return (
    <div className={styles.ticks}>
      <label htmlFor="ticks">Ticks : {value}</label>
      <div className={styles.buttons}>
        <button className={styles.increase} onClick={(event) => changeValue(event, 'up')} />
        <button className={styles.decrease} onClick={(event) => changeValue(event, 'down')} />
      </div>
    </div>
  );
}
