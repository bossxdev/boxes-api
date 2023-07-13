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
exports.WebSetting = void 0;
const base_entity_1 = require("../../base-entity");
const typeorm_1 = require("typeorm");
let WebSetting = class WebSetting extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ default: "", nullable: true }),
    __metadata("design:type", String)
], WebSetting.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ default: "", nullable: true }),
    __metadata("design:type", String)
], WebSetting.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ default: "", nullable: true }),
    __metadata("design:type", String)
], WebSetting.prototype, "telephone", void 0);
__decorate([
    typeorm_1.Column({ default: "", nullable: true }),
    __metadata("design:type", String)
], WebSetting.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ default: "", nullable: true }),
    __metadata("design:type", String)
], WebSetting.prototype, "facebook", void 0);
__decorate([
    typeorm_1.Column({ default: "", nullable: true }),
    __metadata("design:type", String)
], WebSetting.prototype, "line", void 0);
__decorate([
    typeorm_1.Column({ default: "", nullable: true }),
    __metadata("design:type", String)
], WebSetting.prototype, "google_analytics", void 0);
__decorate([
    typeorm_1.Column({ default: "", nullable: true }),
    __metadata("design:type", String)
], WebSetting.prototype, "facebook_pixel", void 0);
WebSetting = __decorate([
    typeorm_1.Entity("WebSetting")
], WebSetting);
exports.WebSetting = WebSetting;
//# sourceMappingURL=web-setting.entity.js.map