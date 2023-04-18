import Head from 'next/head';
import styles from '@/styles/sequencer.module.css';
import {Suspense, useState} from 'react';
import {Sequencer, Loading, ErrorMessage} from '@/components';
import useDrumkit from '../hooks/useDrumkit';

export default function Home() {
  const [queryString, setQueryString] = useState('rock');
  const {data, loading, error} = useDrumkit(queryString);

  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <meta name="description" content="A mini games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading && <Loading />}
      {error && <ErrorMessage message={error.message} />}
      {data && <Sequencer instruments={data} />}
    </>
  );
}
