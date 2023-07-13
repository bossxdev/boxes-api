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
exports.DhlTrackingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dhl_tracking_service_1 = require("./dhl-tracking.service");
const create_dhl_tracking_dto_1 = require("./dto/create-dhl-tracking.dto");
const update_dhl_tracking_dto_1 = require("./dto/update-dhl-tracking.dto");
let DhlTrackingController = class DhlTrackingController {
    constructor(dhlTrackingService) {
        this.dhlTrackingService = dhlTrackingService;
    }
    create(createDhlTrackingDto) {
        return this.dhlTrackingService.create(createDhlTrackingDto);
    }
    findAll() {
        return this.dhlTrackingService.findAll();
    }
    findOne(id) {
        return this.dhlTrackingService.findOne(+id);
    }
    update(id, updateDhlTrackingDto) {
        return this.dhlTrackingService.update(+id, updateDhlTrackingDto);
    }
    remove(id) {
        return this.dhlTrackingService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dhl_tracking_dto_1.CreateDhlTrackingDto]),
    __metadata("design:returntype", void 0)
], DhlTrackingController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DhlTrackingController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DhlTrackingController.prototype, "findOne", null);
__decorate([
    common_1.Patch(":id"),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dhl_tracking_dto_1.UpdateDhlTrackingDto]),
    __metadata("design:returntype", void 0)
], DhlTrackingController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DhlTrackingController.prototype, "remove", null);
DhlTrackingController = __decorate([
    common_1.Controller("api/dhl-tracking"),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("dhl tracking"),
    __metadata("design:paramtypes", [dhl_tracking_service_1.DhlTrackingService])
], DhlTrackingController);
exports.DhlTrackingController = DhlTrackingController;
//# sourceMappingURL=dhl-tracking.controller.js.map