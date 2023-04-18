import Head from 'next/head';
import styles from '@/styles/sequencer.module.css';
import {useState} from 'react';
import {Sequencer, Loading, ErrorMessage} from '@/components';
import useDrumkit from '../hooks/useDrumkit';

export default function Home() {
  const [queryString, setQueryString] = useState('rock');
  const {drumkit, isLoading, error} = useDrumkit(queryString);

  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <meta name="description" content="A mini games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sequencer}>
        {isLoading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {drumkit && <Sequencer instruments={drumkit} />}
      </div>
    </>
  );
}
