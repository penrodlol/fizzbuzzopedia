import ArrowRightIcon from '@svg/arrow-right.svg';
import { Query } from '@utils/trpc';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export interface LanguageCardProps {
  language: Query<'language.get-many'>['languages'][number];
}

export const LanguageCard: FC<LanguageCardProps> = ({ language }) => (
  <Link href={`/${language.slug}`} passHref>
    <a
      aria-label={language.name}
      className="group flex flex-col gap-2 bg-1 rounded-lg shadow-xl hover:shadow-2xl
                 hover:outline hover:outline-2 hover:outline-brand-1 hover:outline-offset-4"
    >
      <div className="pt-2 px-6">
        <span className="text-1 text-fluid-2 leading-4">
          Est. {language.released}
        </span>
        <div className="flex items-center gap-3">
          <Image
            src={language.logo}
            alt={`${language.name} logo`}
            width="30"
            height="30"
            quality="1"
            className="grayscale"
          />
          <h2 className="text-fluid-5 group-hover:text-brand-1">
            {language.name}
          </h2>
        </div>
      </div>
      <div className="bg-2 py-1 px-4 m-1 rounded-md">
        <ArrowRightIcon className="w-5 h-5 fill-brand-2 ml-auto" />
      </div>
    </a>
  </Link>
);
