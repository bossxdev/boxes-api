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
exports.CreateWebSettingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateWebSettingDto {
}
__decorate([
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ default: "" }),
    __metadata("design:type", String)
], CreateWebSettingDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ default: "" }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateWebSettingDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ default: "" }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateWebSettingDto.prototype, "telephone", void 0);
__decorate([
    swagger_1.ApiProperty({ default: "" }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateWebSettingDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ default: "" }),
    __metadata("design:type", String)
], CreateWebSettingDto.prototype, "facebook", void 0);
__decorate([
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ default: "" }),
    __metadata("design:type", String)
], CreateWebSettingDto.prototype, "line", void 0);
__decorate([
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ default: "" }),
    __metadata("design:type", String)
], CreateWebSettingDto.prototype, "google_analytics", void 0);
__decorate([
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ default: "" }),
    __metadata("design:type", String)
], CreateWebSettingDto.prototype, "facebook_pixel", void 0);
exports.CreateWebSettingDto = CreateWebSettingDto;
//# sourceMappingURL=create-web-setting.dto.js.map