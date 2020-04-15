/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiCheckouts from '@juridoc/client-checkouts';
import * as ApiServices from '@juridoc/client-services';

import * as Types from './types';

/**
 * Subscriptions entity class.
 */
@RestDB.Schema.Entity('subscriptions')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Subscription Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Card Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public cardId?: string;

  /**
   * Replacement Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public replacementId?: string;

  /**
   * Checkout entity.
   */
  @RestDB.Schema.Object(() => ApiCheckouts.Entity, ['id', 'status', 'lastError'])
  @Class.Public()
  public checkout?: ApiCheckouts.Entity;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * Context as service.
   */
  @RestDB.Schema.Object(() => ApiServices.Entity, ['id', 'title', 'weight', 'limits', 'recurrenceList'])
  @Class.Public()
  public contextService?: ApiServices.Entity;

  /**
   * Context type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Context))
  @Class.Public()
  public contextType!: Types.Context;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Start date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public startAt?: Date;

  /**
   * Expiration date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public expireAt!: Date;

  /**
   * Replaced date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public replacedAt!: Date;

  /**
   * Subscription status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Subscription recurrence.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Recurrence))
  @Class.Public()
  public recurrence!: Types.Recurrence;

  /**
   * Get the expiration days.
   */
  @Class.Public()
  public get expiryDays(): number {
    return Math.round((this.expireAt.getTime() - Date.now()) / 86400000);
  }
}
