import Head from 'next/head';
import styles from '@/styles/sequencer.module.css';
import {Suspense} from 'react';
import {Sequencer, Loading} from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Drum Machine — About</title>
        <meta name="description" content="A mini games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        This is a drum machine. It’s a simple app that plays a sequence of sounds
      </p>
    </>
  );
}
