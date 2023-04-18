import {ChangeEventHandler, useEffect, useState} from 'react';
import styles from './Sequencer.module.css';
import {InputTempo, InputTicks, Track} from '@/components/';

export default function Sequencer({instruments}: {instruments: Instrument[]}) {
  const [ticks, setTicks] = useState(4);
  const [tempo, setTempo] = useState(120);

  const handleTempoChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTempo(parseInt(event.target.value));
  };

  const handleTicksChange = (value: number) => {
    setTicks(value);
  };

  useEffect(() => {
    setTicks(4);
  }, []);

  return (
    <div className={styles.sequencer}>
      <form>
        <InputTempo value={tempo} onChange={handleTempoChange} />
        <InputTicks value={ticks} onChange={handleTicksChange} />
      </form>
      {instruments.map(({title, sound}) => (
        <Track key={title} title={title} soundUrl={sound} ticks={ticks} />
      ))}
    </div>
  );
}
