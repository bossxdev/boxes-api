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
exports.SizeController = void 0;
const common_1 = require("@nestjs/common");
const size_service_1 = require("./size.service");
const create_size_dto_1 = require("./dto/create-size.dto");
const update_size_dto_1 = require("./dto/update-size.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let SizeController = class SizeController {
    constructor(sizeService) {
        this.sizeService = sizeService;
    }
    create(createSizeDto) {
        return this.sizeService.create(createSizeDto);
    }
    findAll() {
        return this.sizeService.findAll();
    }
    findOne(id) {
        return this.sizeService.findOne(+id);
    }
    updateActive(id, res) {
        return this.sizeService.updaetActive(+id, res);
    }
    update(id, updateSizeDto) {
        return this.sizeService.update(+id, updateSizeDto);
    }
    remove(id) {
        return this.sizeService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_size_dto_1.CreateSizeDto]),
    __metadata("design:returntype", void 0)
], SizeController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SizeController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SizeController.prototype, "findOne", null);
__decorate([
    common_1.Put("active/:id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_size_dto_1.UpdateSizeActiveDto]),
    __metadata("design:returntype", void 0)
], SizeController.prototype, "updateActive", null);
__decorate([
    common_1.Put(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_size_dto_1.UpdateSizeDto]),
    __metadata("design:returntype", void 0)
], SizeController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SizeController.prototype, "remove", null);
SizeController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("size"),
    common_1.Controller("api/size"),
    __metadata("design:paramtypes", [size_service_1.SizeService])
], SizeController);
exports.SizeController = SizeController;
//# sourceMappingURL=size.controller.js.map