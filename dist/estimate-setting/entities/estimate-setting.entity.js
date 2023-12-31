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
exports.EstimateSetting = void 0;
const base_entity_1 = require("../../base-entity");
const typeorm_1 = require("typeorm");
let EstimateSetting = class EstimateSetting extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ nullable: false, default: "" }),
    __metadata("design:type", String)
], EstimateSetting.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, default: "" }),
    __metadata("design:type", String)
], EstimateSetting.prototype, "size", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, default: "" }),
    __metadata("design:type", String)
], EstimateSetting.prototype, "unit", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], EstimateSetting.prototype, "price100", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], EstimateSetting.prototype, "price500", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], EstimateSetting.prototype, "price1000", void 0);
EstimateSetting = __decorate([
    typeorm_1.Entity("EstimateSetting")
], EstimateSetting);
exports.EstimateSetting = EstimateSetting;
//# sourceMappingURL=estimate-setting.entity.js.map