import { Layout } from '@components/Layout';
import { createSSG } from '@server/create-ssg';
import ArrowRightIcon from '@svg/arrow-right.svg';
import { trpc } from '@utils/trpc';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  const { data: languages } = trpc.useQuery(['language.get-all']);

  return (
    <Layout>
      <section>
        <ul className="grid lg:grid-cols-3 gap-fluid-5">
          {languages?.map((language) => (
            <li key={language.slug}>
              <Link href={`/${language.slug}`} passHref>
                <a
                  aria-label={`${language.name}. Created By ${language.creators} on ${language.released}`}
                  className="group flex flex-col bg-1 rounded-lg shadow-xl hover:shadow-2xl
                             hover:outline hover:outline-2 hover:outline-brand hover:outline-offset-4"
                >
                  <span className="pt-5 px-6 text-1 text-fluid-2 leading-4">
                    Est. {language.released}
                  </span>
                  <div className="flex items-center gap-3 px-6">
                    <Image
                      src={language.logo}
                      alt={`${language.name} Logo`}
                      width="30"
                      height="30"
                      className="grayscale"
                    />
                    <h2 className="text-fluid-5">{language.name}</h2>
                  </div>
                  <div
                    className="self-end flex items-center gap-2 shadow-sm py-1 px-2 bg-2
                               rounded-br-md rounded-tl-md"
                  >
                    <ArrowRightIcon className="w-4 h-4 fill-brand" />
                  </div>
                </a>
              </Link>
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
