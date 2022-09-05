import { Query } from '@utils/trpc';
import Image from 'next/image';
import { FC } from 'react';

export interface LanguageHeaderProps {
  language: NonNullable<Query<'language.get'>>;
}

export const LanguageHeader: FC<LanguageHeaderProps> = ({ language }) => (
  <div className="bg-1 py-4 px-8 rounded-md shadow-sm">
    <span className="text-1 text-fluid-3 leading-4">
      Est. {language.released}
    </span>
    <div className="flex items-center gap-5">
      <Image
        src={language.logo}
        alt={`${language.name} Logo`}
        width="50"
        height="50"
        className="grayscale-[0.65] contrast-75"
      />
      <h1 className="text-fluid-7">{language.name}</h1>
    </div>
  </div>
);
