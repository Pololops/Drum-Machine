import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {Button} from '@/components/Button/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <meta name="description" content="A mini games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <Button />
    </>
  );
}
