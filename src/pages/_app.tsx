import { AppRouter } from '@server/routers/_app';
import { withTRPC } from '@trpc/next';
import type { AppType } from 'next/dist/shared/lib/utils';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config: () => ({ url: `/api/trpc` }),
  ssr: false,
})(MyApp);
