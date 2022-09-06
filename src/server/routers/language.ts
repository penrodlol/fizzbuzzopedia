import { Context } from '@server/create-context';
import { pick } from 'contentlayer/client';
import { z } from 'zod';
import { createRouter } from '../create-router';

export const languageRouter = createRouter()
  .query('get-many', {
    input: z.object({
      query: z.string(),
      cursor: z.number().nullish(),
    }),
    resolve: ({ ctx, input: { query, cursor } }) => {
      const q = query.trim().toLowerCase();
      const languages = ctx.languages
        .filter((l) => (!q.length ? true : l.slug.startsWith(q)))
        .map((l, i) => ({ ...props(l), i }))
        .slice(cursor ?? 0, cursor ? cursor + 21 : 21);

      const lastIndex = languages[languages.length - 1]?.i ?? 0;
      const nextCursor = languages.length > 20 ? lastIndex + 1 : undefined;

      return { languages, nextCursor };
    },
  })
  .query('get', {
    input: z.string(),
    resolve: ({ ctx, input: slug }) => {
      const language = ctx.languages.find((l) => l.slug === slug);

      if (!language) return null;

      return { ...props(language), content: language.body.code };
    },
  });

const props = (language: Context['languages'][number]) =>
  pick(language, ['name', 'logo', 'released', 'slug']);
