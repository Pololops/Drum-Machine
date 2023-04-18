import styles from './InputTempo.module.css';
import {ChangeEventHandler, useEffect, useState} from 'react';

type InputProps = {
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function InputTempo({
  value,
  onChange
}: InputProps) {

  return (
    <div className={styles.tempo}>
      <label htmlFor="tempo">
        Tempo : {value}
      </label>
      <input
        type="range"
        id="tempo"
        name="tempo"
        min={20}
        max={240}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
