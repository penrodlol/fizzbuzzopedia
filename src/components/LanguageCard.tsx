import ArrowRightIcon from '@svg/arrow-right.svg';
import UserIcon from '@svg/user.svg';
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
      className="group flex flex-col gap-4 bg-1 rounded-lg shadow-xl hover:shadow-2xl"
    >
      <div className="flex items-center gap-3 pt-5 px-6">
        <Image
          src={language.logo}
          alt={`${language.name} Logo`}
          width="30"
          height="30"
        />
        <h2 className="text-fluid-5">{language.name}</h2>
      </div>
      <div className="flex items-center gap-2 px-6">
        <UserIcon className="w-5 h-5" />
        <span>{language.creator}</span>
      </div>
      <ul className="flex flex-wrap gap-2 px-6">
        {language.styles.map((style) => (
          <li key={style}>{style}</li>
        ))}
      </ul>
      <div className="self-end flex items-center gap-2 bg-2 rounded-br-md rounded-tl-md">
        <div className="p-3">
          <ArrowRightIcon className="w-5 h-5" />
        </div>
      </div>
    </a>
  </Link>
);
