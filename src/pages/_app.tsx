import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { SEO } from '@components/Seo';
import { AppRouter } from '@server/routers/_app';
import { withTRPC } from '@trpc/next';
import type { AppType } from 'next/dist/shared/lib/utils';
import '../styles/globals.scss';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-fluid-4 pt-fluid-3 pb-14 max-w-screen-lg w-full mx-auto">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default withTRPC<AppRouter>({
  config: () => ({ url: `/api/trpc` }),
  ssr: false,
})(MyApp);
