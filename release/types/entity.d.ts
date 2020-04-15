/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCheckouts from '@juridoc/client-checkouts';
import * as ApiServices from '@juridoc/client-services';
import * as Types from './types';
/**
 * Subscriptions entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Subscription Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Card Id.
     */
    cardId?: string;
    /**
     * Replacement Id.
     */
    replacementId?: string;
    /**
     * Checkout entity.
     */
    checkout?: ApiCheckouts.Entity;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * Context as service.
     */
    contextService?: ApiServices.Entity;
    /**
     * Context type.
     */
    contextType: Types.Context;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Start date.
     */
    startAt?: Date;
    /**
     * Expiration date.
     */
    expireAt: Date;
    /**
     * Replaced date.
     */
    replacedAt: Date;
    /**
     * Subscription status.
     */
    status: Types.Status;
    /**
     * Subscription recurrence.
     */
    recurrence: Types.Recurrence;
    /**
     * Get the expiration days.
     */
    get expiryDays(): number;
}
