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
exports.CreateEstimateSettingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEstimateSettingDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ default: "" }),
    __metadata("design:type", String)
], CreateEstimateSettingDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ default: "" }),
    __metadata("design:type", String)
], CreateEstimateSettingDto.prototype, "size", void 0);
__decorate([
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ default: "" }),
    __metadata("design:type", String)
], CreateEstimateSettingDto.prototype, "unit", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ default: 0 }),
    __metadata("design:type", Number)
], CreateEstimateSettingDto.prototype, "price100", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ default: 0 }),
    __metadata("design:type", Number)
], CreateEstimateSettingDto.prototype, "price500", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ default: 0 }),
    __metadata("design:type", Number)
], CreateEstimateSettingDto.prototype, "price1000", void 0);
exports.CreateEstimateSettingDto = CreateEstimateSettingDto;
//# sourceMappingURL=create-estimate-setting.dto.js.map