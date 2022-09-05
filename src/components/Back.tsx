import ArrowLeftIcon from '@svg/arrow-left.svg';
import Link from 'next/link';

export const Back = () => (
  <Link href="/" passHref>
    <a className="group flex items-center gap-2 text-fluid-2">
      <ArrowLeftIcon
        className="h-5 w-5 fill-brand-2 group-hover:fill-brand-1"
        aria-hidden
      />
      <span className="group-hover:text-1">Back</span>
    </a>
  </Link>
);
