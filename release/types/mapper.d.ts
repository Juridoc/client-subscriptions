/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Subscriptions mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the subscription that corresponds to the specified subscription Id.
     * @param id Subscription Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the subscription entity.
     * @throws Throws an error when the subscription wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * List all subscriptions that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the subscription list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all subscriptions that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of subscriptions or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
