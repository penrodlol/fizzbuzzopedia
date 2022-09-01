import { createSSGHelpers } from '@trpc/react/ssg';
import { createContext } from './create-context';
import { appRouter } from './routers/_app';

export const createSSG = async () =>
  createSSGHelpers({ router: appRouter, ctx: await createContext() });
