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
exports.EstimateSettingController = void 0;
const common_1 = require("@nestjs/common");
const estimate_setting_service_1 = require("./estimate-setting.service");
const create_estimate_setting_dto_1 = require("./dto/create-estimate-setting.dto");
const update_estimate_setting_dto_1 = require("./dto/update-estimate-setting.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
let EstimateSettingController = class EstimateSettingController {
    constructor(estimateSettingService) {
        this.estimateSettingService = estimateSettingService;
    }
    create(createEstimateSettingDto) {
        return this.estimateSettingService.create(createEstimateSettingDto);
    }
    findAll() {
        return this.estimateSettingService.findAll();
    }
    findOne(id) {
        return this.estimateSettingService.findOne(+id);
    }
    update(id, updateEstimateSettingDto) {
        return this.estimateSettingService.update(+id, updateEstimateSettingDto);
    }
    updateActive(id, res) {
        return this.estimateSettingService.updateActive(+id, res);
    }
    remove(id) {
        return this.estimateSettingService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estimate_setting_dto_1.CreateEstimateSettingDto]),
    __metadata("design:returntype", void 0)
], EstimateSettingController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstimateSettingController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstimateSettingController.prototype, "findOne", null);
__decorate([
    common_1.Patch(":id"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estimate_setting_dto_1.UpdateEstimateSettingDto]),
    __metadata("design:returntype", void 0)
], EstimateSettingController.prototype, "update", null);
__decorate([
    common_1.Patch("active/:id"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EstimateSettingController.prototype, "updateActive", null);
__decorate([
    common_1.Delete(":id"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstimateSettingController.prototype, "remove", null);
EstimateSettingController = __decorate([
    common_1.Controller("api/estimate-setting"),
    swagger_1.ApiTags("Estimate setting"),
    __metadata("design:paramtypes", [estimate_setting_service_1.EstimateSettingService])
], EstimateSettingController);
exports.EstimateSettingController = EstimateSettingController;
//# sourceMappingURL=estimate-setting.controller.js.map