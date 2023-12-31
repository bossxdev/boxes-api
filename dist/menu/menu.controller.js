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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const menu_service_1 = require("./menu.service");
const create_menu_dto_1 = require("./dto/create-menu.dto");
const update_menu_dto_1 = require("./dto/update-menu.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    create(createMenuDto) {
        return this.menuService.create(createMenuDto);
    }
    findAll() {
        return this.menuService.findAll();
    }
    findOne(id) {
        return this.menuService.findOne(+id);
    }
    update(id, updateMenuDto) {
        return this.menuService.update(+id, updateMenuDto);
    }
    remove(id) {
        return this.menuService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "findOne", null);
__decorate([
    common_1.Patch(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_menu_dto_1.UpdateMenuDto]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "remove", null);
MenuController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("menu"),
    common_1.Controller("api/menu"),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
exports.MenuController = MenuController;
//# sourceMappingURL=menu.controller.js.map