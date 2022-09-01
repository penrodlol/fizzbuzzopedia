import * as trpc from '@trpc/server';
import { Context } from './create-context';

export const createRouter = () => trpc.router<Context>();
