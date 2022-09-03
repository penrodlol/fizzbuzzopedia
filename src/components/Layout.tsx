import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { SEO } from './Seo';

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <SEO />
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-fluid-4 py-fluid-6 max-w-screen-2xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  </>
);
