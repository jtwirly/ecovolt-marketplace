/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.EnergyListingInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyListing.createMany(input as any))),

        create: procedure.input($Schema.EnergyListingInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyListing.create(input as any))),

        deleteMany: procedure.input($Schema.EnergyListingInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyListing.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergyListingInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyListing.delete(input as any))),

        findFirst: procedure.input($Schema.EnergyListingInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyListing.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergyListingInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyListing.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergyListingInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energyListing.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergyListingInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyListing.updateMany(input as any))),

        update: procedure.input($Schema.EnergyListingInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyListing.update(input as any))),

        count: procedure.input($Schema.EnergyListingInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyListing.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergyListingCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyListingCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyListingCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyListingCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergyListingCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyListingCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyListingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyListingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyListingCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyListingCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyListingGetPayload<T>, Context>) => Promise<Prisma.EnergyListingGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergyListingDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyListingDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyListingDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyListingDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergyListingDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyListingDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyListingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyListingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyListingDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyListingDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyListingGetPayload<T>, Context>) => Promise<Prisma.EnergyListingGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergyListingFindFirstArgs, TData = Prisma.EnergyListingGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyListingFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyListingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyListingFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyListingFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyListingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyListingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergyListingFindManyArgs, TData = Array<Prisma.EnergyListingGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyListingFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergyListingGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyListingFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyListingFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergyListingGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergyListingGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergyListingFindUniqueArgs, TData = Prisma.EnergyListingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergyListingFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyListingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyListingFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergyListingFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyListingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyListingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergyListingUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyListingUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyListingUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyListingUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergyListingUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyListingUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyListingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyListingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyListingUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyListingUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyListingGetPayload<T>, Context>) => Promise<Prisma.EnergyListingGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergyListingCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyListingCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergyListingCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergyListingCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergyListingCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergyListingCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergyListingCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyListingCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
