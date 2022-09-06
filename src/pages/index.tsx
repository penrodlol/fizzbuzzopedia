import { LanguageCard } from '@components/LanguageCard';
import { LanguageSearch } from '@components/LanguageSearch';
import { SEO } from '@components/Seo';
import { createSSG } from '@server/create-ssg';
import { trpc } from '@utils/trpc';
import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Home: NextPage = () => {
  const [query, setQuery] = useState<string>('');

  const paginator = trpc.useInfiniteQuery(['language.get-many', { query }], {
    getNextPageParam: (page) => page.nextCursor,
  });

  const [inViewRef] = useInView({
    triggerOnce: !paginator.hasNextPage,
    rootMargin: '0px 0px 500px 0px',
    onChange: (inView) => {
      if (inView && !paginator.isFetchingNextPage) paginator.fetchNextPage();
    },
  });

  return (
    <>
      <SEO />
      <section className="flex flex-col gap-12">
        <LanguageSearch onSearch={setQuery} onReset={setQuery} />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-fluid-3">
          {paginator.data?.pages.map(({ languages }) =>
            languages.map((language) => (
              <li key={language.slug}>
                <LanguageCard language={language} />
              </li>
            )),
          )}
        </ul>
        <span ref={inViewRef} />
        {!paginator.isLoading && !paginator.data?.pages[0]?.languages.length && (
          <div className="self-center text-center">
            <h1 className="text-fluid-7 text-brand-1">No Results</h1>
            <p>Try adjusting your search</p>
          </div>
        )}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ssg = await createSSG();

  await ssg.prefetchInfiniteQuery('language.get-many', { query: '' });

  return { props: { trpcState: JSON.parse(JSON.stringify(ssg.dehydrate())) } };
};

export default Home;
