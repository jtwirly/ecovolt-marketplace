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

        createMany: procedure.input($Schema.EnergyProductionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProduction.createMany(input as any))),

        create: procedure.input($Schema.EnergyProductionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProduction.create(input as any))),

        deleteMany: procedure.input($Schema.EnergyProductionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProduction.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergyProductionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProduction.delete(input as any))),

        findFirst: procedure.input($Schema.EnergyProductionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyProduction.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergyProductionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyProduction.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergyProductionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energyProduction.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergyProductionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProduction.updateMany(input as any))),

        update: procedure.input($Schema.EnergyProductionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProduction.update(input as any))),

        count: procedure.input($Schema.EnergyProductionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyProduction.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergyProductionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProductionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProductionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProductionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergyProductionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProductionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyProductionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyProductionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProductionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProductionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyProductionGetPayload<T>, Context>) => Promise<Prisma.EnergyProductionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergyProductionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProductionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProductionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProductionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergyProductionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProductionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyProductionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyProductionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProductionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProductionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyProductionGetPayload<T>, Context>) => Promise<Prisma.EnergyProductionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergyProductionFindFirstArgs, TData = Prisma.EnergyProductionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyProductionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyProductionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyProductionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyProductionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyProductionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyProductionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergyProductionFindManyArgs, TData = Array<Prisma.EnergyProductionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyProductionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergyProductionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyProductionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyProductionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergyProductionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergyProductionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergyProductionFindUniqueArgs, TData = Prisma.EnergyProductionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergyProductionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyProductionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyProductionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergyProductionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyProductionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyProductionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergyProductionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProductionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProductionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProductionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergyProductionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProductionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyProductionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyProductionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProductionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProductionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyProductionGetPayload<T>, Context>) => Promise<Prisma.EnergyProductionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergyProductionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyProductionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergyProductionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergyProductionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergyProductionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergyProductionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergyProductionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyProductionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
