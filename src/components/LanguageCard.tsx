import ArrowRightIcon from '@svg/arrow-right.svg';
import { Query } from '@utils/trpc';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export interface LanguageCardProps {
  language: Query<'language.get-all'>[number];
}

export const LanguageCard: FC<LanguageCardProps> = ({ language }) => (
  <Link href={`/${language.slug}`} passHref>
    <a
      aria-label={`${language.name}`}
      className="group flex flex-col gap-4 bg-1 rounded-lg shadow-xl hover:shadow-2xl
                 hover:outline hover:outline-2 hover:outline-brand hover:outline-offset-4"
    >
      <div className="flex items-center gap-3 pt-5 px-6">
        <Image
          src={language.logo}
          alt={`${language.name} Logo`}
          width="30"
          height="30"
          className="grayscale"
        />
        <h2 className="text-fluid-5 group-hover:text-brand">{language.name}</h2>
      </div>
      <div className="px-6 flex flex-col">
        <span className="text-1">Created By:</span>
        <strong>{language.creator}</strong>
      </div>
      <div
        className="self-end flex items-center gap-2 shadow-sm py-1 px-2 bg-2
                   rounded-br-md rounded-tl-md"
      >
        <ArrowRightIcon className="w-4 h-4 fill-brand" />
      </div>
    </a>
  </Link>
);
