"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetailModule = void 0;
const common_1 = require("@nestjs/common");
const payment_detail_service_1 = require("./payment-detail.service");
const payment_detail_controller_1 = require("./payment-detail.controller");
const typeorm_1 = require("@nestjs/typeorm");
const payment_detail_entity_1 = require("./entities/payment-detail.entity");
let PaymentDetailModule = class PaymentDetailModule {
};
PaymentDetailModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([payment_detail_entity_1.PaymentDetail])],
        controllers: [payment_detail_controller_1.PaymentDetailController],
        providers: [payment_detail_service_1.PaymentDetailService],
    })
], PaymentDetailModule);
exports.PaymentDetailModule = PaymentDetailModule;
//# sourceMappingURL=payment-detail.module.js.map