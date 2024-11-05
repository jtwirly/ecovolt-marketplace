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

        createMany: procedure.input($Schema.EnergyTypeInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyType.createMany(input as any))),

        create: procedure.input($Schema.EnergyTypeInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyType.create(input as any))),

        deleteMany: procedure.input($Schema.EnergyTypeInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyType.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergyTypeInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyType.delete(input as any))),

        findFirst: procedure.input($Schema.EnergyTypeInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyType.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergyTypeInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyType.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergyTypeInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energyType.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergyTypeInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyType.updateMany(input as any))),

        update: procedure.input($Schema.EnergyTypeInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyType.update(input as any))),

        count: procedure.input($Schema.EnergyTypeInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyType.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergyTypeCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyTypeCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyTypeCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyTypeCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergyTypeCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyTypeCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyTypeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyTypeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyTypeCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyTypeCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyTypeGetPayload<T>, Context>) => Promise<Prisma.EnergyTypeGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergyTypeDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyTypeDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyTypeDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyTypeDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergyTypeDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyTypeDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyTypeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyTypeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyTypeDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyTypeDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyTypeGetPayload<T>, Context>) => Promise<Prisma.EnergyTypeGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergyTypeFindFirstArgs, TData = Prisma.EnergyTypeGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyTypeFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyTypeGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyTypeFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyTypeFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyTypeGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyTypeGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergyTypeFindManyArgs, TData = Array<Prisma.EnergyTypeGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyTypeFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergyTypeGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyTypeFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyTypeFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergyTypeGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergyTypeGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergyTypeFindUniqueArgs, TData = Prisma.EnergyTypeGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergyTypeFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyTypeGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyTypeFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergyTypeFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyTypeGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyTypeGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergyTypeUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyTypeUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyTypeUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyTypeUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergyTypeUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyTypeUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyTypeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyTypeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyTypeUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyTypeUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyTypeGetPayload<T>, Context>) => Promise<Prisma.EnergyTypeGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergyTypeCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyTypeCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergyTypeCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergyTypeCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergyTypeCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergyTypeCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergyTypeCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyTypeCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
