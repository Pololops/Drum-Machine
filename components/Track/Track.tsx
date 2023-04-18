import styles from './Track.module.css';
import {PadButton, Reset} from '..';
import {useMemo, useState} from 'react';

type InstrumentProps = {
  title: string;
  soundUrl: string;
  ticks: number;
};

export default function Instrument({title, soundUrl, ticks}: InstrumentProps) {
  const [isReset, setIsReset] = useState(false);

  const audio = useMemo(() => new Audio(soundUrl), [soundUrl]);
  const play = () => {
    setIsReset(false);
    audio.currentTime = 0;
    audio.play();
  };

  const handleResetClick = () => {
    setIsReset(true);
  };

  return (
    <div className={styles.instrument}>
      <div className={styles.title}>{title}</div>
      {Array.from({length: ticks}).map((_, index) => (
        <PadButton key={title + index} play={play} isReset={isReset} />
      ))}
      <Reset onClick={handleResetClick} />
    </div>
  );
}
