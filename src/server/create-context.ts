import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { allLanguages } from 'contentlayer/generated';

export type ContextOpts = trpcNext.CreateNextContextOptions;
export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createContext = async (opts?: ContextOpts) => ({
  req: opts?.req,
  res: opts?.res,
  languages: allLanguages,
});
