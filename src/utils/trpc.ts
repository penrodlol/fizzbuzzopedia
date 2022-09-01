import { AppRouter } from '@server/routers/_app';
import { createReactQueryHooks } from '@trpc/react';
import { inferProcedureOutput } from '@trpc/server';

export type Query<T extends keyof AppRouter['_def']['queries']> =
  inferProcedureOutput<AppRouter['_def']['queries'][T]>;

export type Mutation<T extends keyof AppRouter['_def']['mutations']> =
  inferProcedureOutput<AppRouter['_def']['mutations'][T]>;

export const trpc = createReactQueryHooks<AppRouter>();
