import { Anchor } from '@components/Anchor';
import ArrowLeftIcon from '@svg/arrow-left.svg';
import type { NextPage } from 'next';
import Link from 'next/link';

const Custom404: NextPage = () => (
  <section className="flex flex-col items-center">
    <h1 className="text-[clamp(8.55rem,calc(7.43rem+5.64vw),9.44rem)] leading-none text-brand-2">
      Uh Oh!
    </h1>
    <div className="my-fluid-5 text-center text-fluid-4">
      <p>This language doesnt exist in our system ...</p>
      <p>
        To add it, please visit the repository{' '}
        <Anchor
          href={process.env.REPO}
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="Github repository"
        >
          here
        </Anchor>
        .
      </p>
    </div>
    <Link href="/" passHref>
      <a className="group text-fluid-4 flex items-center gap-5 justify-center">
        <ArrowLeftIcon
          className="w-8 h-8 fill-brand-2 group-hover:fill-brand-1"
          aria-hidden
        />
        <span className="text-2 group-hover:text-1">Go to Home</span>
      </a>
    </Link>
  </section>
);

export default Custom404;
