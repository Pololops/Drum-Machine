import {useEffect, useState} from 'react';
import styles from './Sequencer.module.css';
import {Track} from '..';

type Instrument = {
  title: string;
  sound: string;
};

export default function Player() {
  const [instruments, setInstruments] = useState<Instrument[] | []>([]);
  const [ticks, setTicks] = useState(0);
  const [error, setError] = useState('');

  const fetchInstruments = async () => {
    try {
      const response = await fetch('/data/instruments.json');
      const data = await response.json();
      if (!data) throw new Error('No data found');
      setInstruments(data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      setError('Unknown error occurred');
    }
  };

  useEffect(() => {
    setTicks(4);
    fetchInstruments();
  }, []);

  return (
    <div className={styles.sequencer}>
      {error ? (
        <h2>{error}</h2>
      ) : (
        instruments.map(({title, sound}) => (
          <Track
            key={title}
            title={title}
            soundUrl={sound}
            ticks={ticks}
          />
        ))
      )}
    </div>
  );
}
