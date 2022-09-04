import { pick } from 'contentlayer/client';
import { z } from 'zod';
import { createRouter } from '../create-router';

export const languageRouter = createRouter()
  .query('get-all', {
    resolve: ({ ctx }) =>
      ctx.languages.map((language) =>
        pick(language, ['name', 'logo', 'released', 'slug']),
      ),
  })
  .query('get', {
    input: z.string(),
    resolve: ({ ctx, input: slug }) => {
      const language = ctx.languages.find((l) => l.slug === slug);

      if (!language) return null;

      return {
        ...pick(language, ['name', 'logo', 'released', 'slug']),
        content: language.body.code,
      };
    },
  })
  .mutation('search', {
    input: z.string(),
    resolve: ({ ctx, input }) => {
      const query = input?.trim().toLowerCase();

      if (!query) return [];

      return ctx.languages
        .filter((language) => language.slug.startsWith(query))
        .map((language) =>
          pick(language, ['name', 'logo', 'released', 'slug']),
        );
    },
  });
