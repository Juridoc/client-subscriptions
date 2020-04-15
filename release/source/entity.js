"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiCheckouts = require("@juridoc/client-checkouts");
const ApiServices = require("@juridoc/client-services");
const Types = require("./types");
/**
 * Subscriptions entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Get the expiration days.
     */
    get expiryDays() {
        return Math.round((this.expireAt.getTime() - Date.now()) / 86400000);
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "accountId", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "cardId", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "replacementId", void 0);
__decorate([
    RestDB.Schema.Object(() => ApiCheckouts.Entity, ['id', 'status', 'lastError']),
    Class.Public()
], Entity.prototype, "checkout", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "contextId", void 0);
__decorate([
    RestDB.Schema.Object(() => ApiServices.Entity, ['id', 'title', 'weight', 'limits', 'recurrenceList']),
    Class.Public()
], Entity.prototype, "contextService", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Context)),
    Class.Public()
], Entity.prototype, "contextType", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "startAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "expireAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "replacedAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Status)),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Recurrence)),
    Class.Public()
], Entity.prototype, "recurrence", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "expiryDays", null);
Entity = __decorate([
    RestDB.Schema.Entity('subscriptions'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map