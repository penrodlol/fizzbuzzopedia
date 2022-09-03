import { Layout } from '@components/Layout';
import { createSSG } from '@server/create-ssg';
import { trpc } from '@utils/trpc';
import { allLanguages } from 'contentlayer/generated';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface StaticProps {
  slug: string;
}

const Language: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  slug,
}) => {
  const { data: language } = trpc.useQuery(['language.get', slug]);
  const MDX = useMDXComponent(language?.content ?? '');

  return (
    <Layout>
      {language && (
        <section className="bg-1 p-4 rounded-md shadow-xl">
          <div className="flex items-center gap-5">
            <Image
              src={language.logo}
              alt={`${language.name} Logo`}
              width="50"
              height="50"
              className="grayscale"
            />
            <h1 className="text-fluid-6">{language.name}</h1>
          </div>
        </section>
      )}
      <section>
        <MDX />
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: allLanguages.map((p) => `/${p.slug}`), fallback: false };
};

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params,
}) => {
  const ssg = await createSSG();
  const slug = String(params?.slug);

  if (slug) await ssg.prefetchQuery('language.get', slug);

  return { props: { trpcState: ssg.dehydrate(), slug } };
};

export default Language;
