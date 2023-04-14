import styles from './Instrument.module.css';
import Button from '../Button/Button';

type InstrumentProps = {
  title: string;
  soundUrl: string;
  ticks: number;
};

const Instrument = ({title, soundUrl, ticks}: InstrumentProps) => {
  const handleClick = () => {
    const audio = new Audio(soundUrl);
    audio.play();
  };

  return (
    <div className={styles.instrument}>
      <h2>{title}</h2>
      <audio src={soundUrl} preload="auto" />
      {Array.from({length: ticks}).map((_, index) => (
        <Button key={title + index} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Instrument;
