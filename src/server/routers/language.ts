import { pick } from 'contentlayer/client';
import { z } from 'zod';
import { createRouter } from '../create-router';

export const languageRouter = createRouter()
  .query('get-all', {
    resolve: ({ ctx }) =>
      ctx.languages.map((language) => ({
        ...pick(language, ['name', 'logo', 'slug']),
        creator: language.creator.name,
      })),
  })
  .query('get', {
    input: z.string(),
    resolve: ({ ctx, input: slug }) => {
      const language = ctx.languages.find((l) => l.slug === slug);

      if (!language) return null;

      return {
        ...pick(language, ['name', 'logo', 'slug']),
        creator: pick(language.creator, ['name', 'url']),
        content: language.body.code,
      };
    },
  });
