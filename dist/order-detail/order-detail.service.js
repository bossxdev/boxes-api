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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailService = void 0;
const order_detail_entity_1 = require("./entities/order-detail.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const send_mail_1 = require("../utils/order-status/send-mail");
let OrderDetailService = class OrderDetailService {
    constructor(orderDetailRepo) {
        this.orderDetailRepo = orderDetailRepo;
    }
    async create(createOrderDetailDto) {
        const newData = await this.orderDetailRepo.create(createOrderDetailDto);
        const mainData = {
            user: newData.user,
            category_type: newData.category_type,
            style_type: newData.style_type,
        };
        const result = await this.orderDetailRepo.save(mainData);
        await send_mail_1.PendingPaymentMail(createOrderDetailDto.email);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: result };
    }
    async findAll() {
        const returnData = await this.orderDetailRepo.find({
            order: {
                id: "DESC",
            },
        });
        if (!returnData)
            throw new common_1.NotFoundException("cannot find data.");
        else
            return { data: returnData };
    }
    async findOne(id) {
        const returnData = await this.orderDetailRepo.findOne(id);
        if (!returnData)
            throw new common_1.NotFoundException("cannot find data.");
        else
            return { data: returnData };
    }
    async processingMsg() { }
    async update(id, updateOrderDetailDto) {
        const newData = await this.orderDetailRepo.create(updateOrderDetailDto);
        const mainData = {
            user: newData.user,
            category_type: newData.category_type,
        };
        const result = await this.orderDetailRepo.update(id, mainData);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: result };
    }
    async remove(id) {
        const result = await this.orderDetailRepo.delete(id);
        if (result)
            return { data: {} };
    }
};
OrderDetailService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(order_detail_entity_1.OrderDetail)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], OrderDetailService);
exports.OrderDetailService = OrderDetailService;
//# sourceMappingURL=order-detail.service.js.map