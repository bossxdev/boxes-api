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
exports.RemeberPassword = exports.ChangePassword = exports.CreateUserLogsDto = exports.CreateUserOrderDto = exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastname", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "role", void 0);
exports.CreateUserDto = CreateUserDto;
class CreateUserOrderDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "lastname", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "address", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "thumbon", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "ampher", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Object)
], CreateUserOrderDto.prototype, "province", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateUserOrderDto.prototype, "zipcode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "telephone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "fax", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], CreateUserOrderDto.prototype, "lineid", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "company", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "bill_address", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateUserOrderDto.prototype, "bill_address_status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "bill_ampher", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "bill_company", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserOrderDto.prototype, "bill_thumbon", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserOrderDto.prototype, "bill_zipcode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], CreateUserOrderDto.prototype, "bill_province", void 0);
exports.CreateUserOrderDto = CreateUserOrderDto;
class CreateUserLogsDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateUserLogsDto.prototype, "user", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserLogsDto.prototype, "description", void 0);
exports.CreateUserLogsDto = CreateUserLogsDto;
class ChangePassword {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], ChangePassword.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ChangePassword.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ChangePassword.prototype, "new_password", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ChangePassword.prototype, "new_password_again", void 0);
exports.ChangePassword = ChangePassword;
class RemeberPassword {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], RemeberPassword.prototype, "email", void 0);
exports.RemeberPassword = RemeberPassword;
//# sourceMappingURL=create-user.dto.js.map