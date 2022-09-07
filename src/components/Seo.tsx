import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

export interface SEOProps {
  title?: string;
}

export const SEO: FC<SEOProps> = ({ title }) => {
  const { asPath } = useRouter();

  return (
    <Head>
      <title>{title ?? process.env.NAME}</title>

      <meta name="title" content={title ?? process.env.NAME} />
      <meta name="description" content="An encyclopedia of fizzbuzzes" />

      <link href={`${process.env.DOMAIN}${asPath}`} rel="canonical" />
    </Head>
  );
};
