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
exports.ColorController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const color_service_1 = require("./color.service");
const create_color_dto_1 = require("./dto/create-color.dto");
const update_color_dto_1 = require("./dto/update-color.dto");
const swagger_1 = require("@nestjs/swagger");
let ColorController = class ColorController {
    constructor(colorService) {
        this.colorService = colorService;
    }
    create(createColorDto) {
        return this.colorService.create(createColorDto);
    }
    findAll() {
        return this.colorService.findAll();
    }
    findOne(id) {
        return this.colorService.findOne(+id);
    }
    updateActive(id, res) {
        return this.colorService.updaetActive(+id, res);
    }
    update(id, updateColorDto) {
        return this.colorService.update(+id, updateColorDto);
    }
    remove(id) {
        return this.colorService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_color_dto_1.CreateColorDto]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "findOne", null);
__decorate([
    common_1.Put("active/:id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "updateActive", null);
__decorate([
    common_1.Put(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_color_dto_1.UpdateColorDto]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "remove", null);
ColorController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("color"),
    common_1.Controller("api/color"),
    __metadata("design:paramtypes", [color_service_1.ColorService])
], ColorController);
exports.ColorController = ColorController;
//# sourceMappingURL=color.controller.js.map