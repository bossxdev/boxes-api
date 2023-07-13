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
exports.Userlogs = exports.Users = void 0;
const role_entity_1 = require("./../../roles/entities/role.entity");
const base_entity_1 = require("./../../base-entity");
const typeorm_1 = require("typeorm");
const province_entity_1 = require("./province.entity");
let Users = class Users extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "company", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "thumbon", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "ampher", void 0);
__decorate([
    typeorm_1.ManyToOne(() => province_entity_1.Province, (province) => province.id),
    typeorm_1.JoinColumn({
        name: "provinceid",
    }),
    __metadata("design:type", province_entity_1.Province)
], Users.prototype, "province", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Users.prototype, "zipcode", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "bill_company", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "bill_address", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "bill_thumbon", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "bill_ampher", void 0);
__decorate([
    typeorm_1.ManyToOne(() => province_entity_1.Province, (province) => province.id),
    typeorm_1.JoinColumn({
        name: "bill_provinceid",
    }),
    __metadata("design:type", province_entity_1.Province)
], Users.prototype, "bill_province", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Users.prototype, "bill_zipcode", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "telephone", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "fax", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "lineid", void 0);
__decorate([
    typeorm_1.ManyToOne(() => role_entity_1.Roles, (role) => role.id),
    typeorm_1.JoinColumn({
        name: "roleid",
    }),
    __metadata("design:type", role_entity_1.Roles)
], Users.prototype, "role", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "token_remember", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: "timestamp" }),
    __metadata("design:type", Date)
], Users.prototype, "token_remember_datetime", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "token", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Users.prototype, "tax_no", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "tax_type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "bill_address_status", void 0);
Users = __decorate([
    typeorm_1.Entity("users")
], Users);
exports.Users = Users;
let Userlogs = class Userlogs extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.ManyToOne(() => Users, (user) => user.id),
    typeorm_1.JoinColumn({
        name: "userid",
    }),
    __metadata("design:type", Users)
], Userlogs.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Userlogs.prototype, "description", void 0);
Userlogs = __decorate([
    typeorm_1.Entity("user_logs")
], Userlogs);
exports.Userlogs = Userlogs;
//# sourceMappingURL=user.entity.js.map