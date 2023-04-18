import {useEffect, useState} from 'react';
import styles from './Sequencer.module.css';
import {Track} from '..';

export default function Sequencer({instruments}: {instruments: Instrument[]}) {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    setTicks(4);
  }, []);

  return (
    <div className={styles.sequencer}>
      {instruments.map(({title, sound}) => (
        <Track key={title} title={title} soundUrl={sound} ticks={ticks} />
      ))}
    </div>
  );
}
