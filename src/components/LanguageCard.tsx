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
      aria-label={language.name}
      className="group flex flex-col bg-1 rounded-lg shadow-xl hover:shadow-2xl
                 hover:outline hover:outline-2 hover:outline-brand-2 hover:outline-offset-4"
    >
      <span className="pt-5 px-6 text-1 text-fluid-2 leading-4">
        Est. {language.released}
      </span>
      <div className="relative flex items-center gap-3 pb-3 px-6">
        <Image
          src={language.logo}
          alt={`${language.name} logo`}
          width="30"
          height="30"
          className="grayscale-[0.65] contrast-75"
        />
        <h2 className="text-fluid-5">{language.name}</h2>
      </div>
      <div
        className="self-end flex items-center gap-2 shadow-sm py-1 px-2 bg-2
                   rounded-br-md rounded-tl-md"
      >
        <ArrowRightIcon className="w-5 h-5" />
      </div>
    </a>
  </Link>
);
