"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DhlTracking = void 0;
const base_entity_1 = require("../../base-entity");
const typeorm_1 = require("typeorm");
let DhlTracking = class DhlTracking extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DhlTracking.prototype, "messageDateTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DhlTracking.prototype, "shipmentID", void 0);
__decorate([
    typeorm_1.Column({ default: [] }),
    __metadata("design:type", String)
], DhlTracking.prototype, "deliveryConfirmationNo", void 0);
__decorate([
    typeorm_1.Column({ default: [] }),
    __metadata("design:type", String)
], DhlTracking.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({ default: [] }),
    __metadata("design:type", String)
], DhlTracking.prototype, "shipmentPieceID", void 0);
DhlTracking = __decorate([
    typeorm_1.Entity("dhl-tracking")
], DhlTracking);
exports.DhlTracking = DhlTracking;
//# sourceMappingURL=dhl-tracking.entity.js.map