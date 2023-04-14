import Head from 'next/head';
import styles from '@/styles/sequencer.module.css';
import {Suspense, useEffect, useState} from 'react';
import {Instrument} from '@/components';

type Instrument = {
  title: string;
  soundUrl: string;
};

export default function Home() {
  const [instruments, setInstruments] = useState<Instrument[] | []>([]);
  const [ticks, setTicks] = useState(4);

  useEffect(() => {
    const fetchInstruments = async () => {
      const response = await fetch('/data/instruments.json');
      const data = await response.json();
      setInstruments(data);
    };
    fetchInstruments();
  }, []);

  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <meta name="description" content="A mini games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sequencer}>
        <Suspense fallback={<h2>...loading...</h2>}>
          {instruments.map(({title, soundUrl}) => (
            <Instrument
              key={title}
              title={title}
              soundUrl={soundUrl}
              ticks={ticks}
            />
          ))}
        </Suspense>
      </div>
    </>
  );
}
