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
exports.UpdateOrderDetailOtherDto = exports.UpdateOrderDetailDto = exports.UpdateOrderStyleOtherDto = exports.UpdateOrderStyleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let UpdateOrderStyleDto = class UpdateOrderStyleDto {
};
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderStyleDto.prototype, "size_type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderStyleDto.prototype, "material", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderStyleDto.prototype, "print_finish", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderStyleDto.prototype, "print_side", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UpdateOrderStyleDto.prototype, "per_unit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UpdateOrderStyleDto.prototype, "quantity", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UpdateOrderStyleDto.prototype, "sub_total", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UpdateOrderStyleDto.prototype, "custom_width", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UpdateOrderStyleDto.prototype, "custom_lenght", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UpdateOrderStyleDto.prototype, "custom_height", void 0);
UpdateOrderStyleDto = __decorate([
    class_transformer_1.Exclude()
], UpdateOrderStyleDto);
exports.UpdateOrderStyleDto = UpdateOrderStyleDto;
let UpdateOrderStyleOtherDto = class UpdateOrderStyleOtherDto {
};
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderStyleOtherDto.prototype, "order_detail", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderStyleOtherDto.prototype, "volume", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderStyleOtherDto.prototype, "color", void 0);
UpdateOrderStyleOtherDto = __decorate([
    class_transformer_1.Exclude()
], UpdateOrderStyleOtherDto);
exports.UpdateOrderStyleOtherDto = UpdateOrderStyleOtherDto;
let UpdateOrderDetailDto = class UpdateOrderDetailDto {
};
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailDto.prototype, "order", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailDto.prototype, "product", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UpdateOrderDetailDto.prototype, "size", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailDto.prototype, "paper_type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailDto.prototype, "print_pattern", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailDto.prototype, "coating_pattern", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailDto.prototype, "special_technic", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UpdateOrderDetailDto.prototype, "quantity_of_product", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UpdateOrderDetailDto.prototype, "price_per_item", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UpdateOrderDetailDto.prototype, "email", void 0);
UpdateOrderDetailDto = __decorate([
    class_transformer_1.Exclude()
], UpdateOrderDetailDto);
exports.UpdateOrderDetailDto = UpdateOrderDetailDto;
let UpdateOrderDetailOtherDto = class UpdateOrderDetailOtherDto extends UpdateOrderStyleOtherDto {
};
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailOtherDto.prototype, "user", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailOtherDto.prototype, "category_type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], UpdateOrderDetailOtherDto.prototype, "style_type", void 0);
UpdateOrderDetailOtherDto = __decorate([
    class_transformer_1.Exclude()
], UpdateOrderDetailOtherDto);
exports.UpdateOrderDetailOtherDto = UpdateOrderDetailOtherDto;
//# sourceMappingURL=update-order-detail.dto.js.map