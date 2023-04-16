import Head from 'next/head';
import styles from '@/styles/sequencer.module.css';
import {Suspense} from 'react';
import {Sequencer, Loading} from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <meta name="description" content="A mini games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sequencer}>
        <Suspense fallback={<Loading />}>
          <Sequencer />
        </Suspense>
      </div>
    </>
  );
}
