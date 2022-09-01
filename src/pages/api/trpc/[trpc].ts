import { createContext } from '@server/create-context';
import { appRouter as router } from '@server/routers/_app';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({ router, createContext });
