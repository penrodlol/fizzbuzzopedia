import { pick } from 'contentlayer/client';
import { createRouter } from '../create-router';

export const languageRouter = createRouter().query('get-all', {
  resolve: ({ ctx }) =>
    ctx.languages.map((language) => ({
      ...pick(language, ['name', 'logo', 'slug']),
      creator: language.creator.name,
    })),
});
