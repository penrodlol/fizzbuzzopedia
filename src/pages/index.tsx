import { LanguageCard } from '@components/LanguageCard';
import { Layout } from '@components/Layout';
import { createSSG } from '@server/create-ssg';
import { trpc } from '@utils/trpc';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  const { data: languages } = trpc.useQuery(['language.get-all']);

  return (
    <Layout>
      <section>
        <ul className="grid md:grid-cols-3 gap-fluid-5">
          {languages?.map((language) => (
            <li key={language.slug}>
              <LanguageCard language={language} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ssg = await createSSG();

  await ssg.prefetchQuery('language.get-all');

  return { props: { trpcState: ssg.dehydrate() } };
};

export default Home;
