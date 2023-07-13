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
exports.CreateOrderDetailOtherDto = exports.CreateOrderDetailDto = exports.CreateOrderStyleOtherDto = exports.CreateOrderStyleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOrderStyleDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderStyleDto.prototype, "size_type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderStyleDto.prototype, "material", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderStyleDto.prototype, "print_finish", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderStyleDto.prototype, "print_side", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateOrderStyleDto.prototype, "per_unit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateOrderStyleDto.prototype, "quantity", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateOrderStyleDto.prototype, "sub_total", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateOrderStyleDto.prototype, "custom_width", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateOrderStyleDto.prototype, "custom_lenght", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateOrderStyleDto.prototype, "custom_height", void 0);
exports.CreateOrderStyleDto = CreateOrderStyleDto;
class CreateOrderStyleOtherDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderStyleOtherDto.prototype, "order_detail", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderStyleOtherDto.prototype, "volume", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderStyleOtherDto.prototype, "color", void 0);
exports.CreateOrderStyleOtherDto = CreateOrderStyleOtherDto;
class CreateOrderDetailDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailDto.prototype, "order", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailDto.prototype, "product", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateOrderDetailDto.prototype, "size", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailDto.prototype, "paper_type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailDto.prototype, "print_pattern", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailDto.prototype, "coating_pattern", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailDto.prototype, "special_technic", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateOrderDetailDto.prototype, "quantity_of_product", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateOrderDetailDto.prototype, "price_per_item", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateOrderDetailDto.prototype, "email", void 0);
exports.CreateOrderDetailDto = CreateOrderDetailDto;
class CreateOrderDetailOtherDto extends CreateOrderStyleOtherDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailOtherDto.prototype, "user", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailOtherDto.prototype, "category_type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateOrderDetailOtherDto.prototype, "style_type", void 0);
exports.CreateOrderDetailOtherDto = CreateOrderDetailOtherDto;
//# sourceMappingURL=create-order-detail.dto.js.map