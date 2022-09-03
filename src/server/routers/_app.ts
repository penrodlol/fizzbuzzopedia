import { createRouter } from '../create-router';
import { languageRouter } from './language';

export type AppRouter = typeof appRouter;

export const appRouter = createRouter().merge('language.', languageRouter);
