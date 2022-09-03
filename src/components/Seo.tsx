import Head from 'next/head';
import { useRouter } from 'next/router';

export const SEO = () => {
  const { asPath } = useRouter();

  return (
    <Head>
      <title>Fizzbuzzopedia</title>

      <meta name="title" content="Fizzbuzzopedia" />
      <meta name="description" content="--" />

      {/* <link rel="icon" type="image/svg+xml" href="/svg/favicon.svg" /> */}

      <link href={`${process.env.DOMAIN}${asPath}`} rel="canonical" />
    </Head>
  );
};
