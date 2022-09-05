import { LanguageHeader } from '@components/LanguageHeader';
import { LanguageMDX } from '@components/LanguageMDX';
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

interface StaticProps {
  slug: string;
}

const Language: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  slug,
}) => {
  const { data: language } = trpc.useQuery(['language.get', slug]);

  return (
    <Layout>
      {language && (
        <div className="flex flex-col gap-fluid-4">
          <section>
            <LanguageHeader language={language} />
          </section>
          <div className="h-2 w-full bg-1 rounded-md" />
          <section>
            <LanguageMDX content={language.content} />
          </section>
        </div>
      )}
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
