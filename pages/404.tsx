import Head from 'next/head';
import Link from 'next/link';

export default function NotFound404() {
  return (
    <>
      <Head>
        <title>Drum Machine - Errur 404</title>
        <meta name="description" content="A mini games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <noindex />
      </Head>

      <h2>Erreur 404</h2>
      <p>Il semblerait que vous vous soyez perdu !</p>
      <Link href="/">{`Revenir à l'accueil`}</Link>
    </>
  );
}
