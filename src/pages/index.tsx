import { LanguageCard } from '@components/LanguageCard';
import { LanguageSearch } from '@components/LanguageSearch';
import { createSSG } from '@server/create-ssg';
import { trpc } from '@utils/trpc';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  const utils = trpc.useContext();

  const languages = trpc.useQuery(['language.get-all']);

  const { mutate: search } = trpc.useMutation(['language.search'], {
    onSuccess: (filteredLanguages) => {
      utils.cancelQuery(['language.get-all']);
      utils.setQueryData(['language.get-all'], filteredLanguages);
    },
  });

  return (
    <section className="flex flex-col gap-12">
      <LanguageSearch onSearch={search} onReset={() => languages.refetch()} />
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-fluid-3">
        {languages.data?.map((language) => (
          <li key={language.slug}>
            <LanguageCard language={language} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ssg = await createSSG();

  await ssg.prefetchQuery('language.get-all');

  return { props: { trpcState: ssg.dehydrate() } };
};

export default Home;
