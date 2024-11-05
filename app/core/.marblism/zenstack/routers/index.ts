/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createEnergyTypeRouter from "./EnergyType.router";
import createLocationRouter from "./Location.router";
import createEnergyListingRouter from "./EnergyListing.router";
import createTransactionRouter from "./Transaction.router";
import createEnergyConsumptionRouter from "./EnergyConsumption.router";
import createEnergyProductionRouter from "./EnergyProduction.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as EnergyTypeClientType } from "./EnergyType.router";
import { ClientType as LocationClientType } from "./Location.router";
import { ClientType as EnergyListingClientType } from "./EnergyListing.router";
import { ClientType as TransactionClientType } from "./Transaction.router";
import { ClientType as EnergyConsumptionClientType } from "./EnergyConsumption.router";
import { ClientType as EnergyProductionClientType } from "./EnergyProduction.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        energyType: createEnergyTypeRouter(router, procedure),
        location: createLocationRouter(router, procedure),
        energyListing: createEnergyListingRouter(router, procedure),
        transaction: createTransactionRouter(router, procedure),
        energyConsumption: createEnergyConsumptionRouter(router, procedure),
        energyProduction: createEnergyProductionRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    energyType: EnergyTypeClientType<AppRouter>;
    location: LocationClientType<AppRouter>;
    energyListing: EnergyListingClientType<AppRouter>;
    transaction: TransactionClientType<AppRouter>;
    energyConsumption: EnergyConsumptionClientType<AppRouter>;
    energyProduction: EnergyProductionClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}
