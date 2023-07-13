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
exports.VolumeController = void 0;
const common_1 = require("@nestjs/common");
const volume_service_1 = require("./volume.service");
const create_volume_dto_1 = require("./dto/create-volume.dto");
const update_volume_dto_1 = require("./dto/update-volume.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let VolumeController = class VolumeController {
    constructor(volumeService) {
        this.volumeService = volumeService;
    }
    create(createVolumeDto) {
        return this.volumeService.create(createVolumeDto);
    }
    findAll() {
        return this.volumeService.findAll();
    }
    findOne(id) {
        return this.volumeService.findOne(+id);
    }
    updateActive(id, res) {
        return this.volumeService.updaetActive(+id, res);
    }
    update(id, updateVolumeDto) {
        return this.volumeService.update(+id, updateVolumeDto);
    }
    remove(id) {
        return this.volumeService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_volume_dto_1.CreateVolumeDto]),
    __metadata("design:returntype", void 0)
], VolumeController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VolumeController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VolumeController.prototype, "findOne", null);
__decorate([
    common_1.Put("active/:id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VolumeController.prototype, "updateActive", null);
__decorate([
    common_1.Put(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_volume_dto_1.UpdateVolumeDto]),
    __metadata("design:returntype", void 0)
], VolumeController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VolumeController.prototype, "remove", null);
VolumeController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("volume"),
    common_1.Controller("api/volume"),
    __metadata("design:paramtypes", [volume_service_1.VolumeService])
], VolumeController);
exports.VolumeController = VolumeController;
//# sourceMappingURL=volume.controller.js.map