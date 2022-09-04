import { Query } from '@utils/trpc';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC } from 'react';

export interface LanguageMDXProps {
  content: NonNullable<Query<'language.get'>>['content'];
}

export const LanguageMDX: FC<LanguageMDXProps> = ({ content }) => {
  const MDX = useMDXComponent(content);
  return <MDX />;
};
