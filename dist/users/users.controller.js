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
exports.UsersController = void 0;
const users_logs_service_1 = require("./users-logs.service");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService, usersLogsService) {
        this.usersService = usersService;
        this.usersLogsService = usersLogsService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    createUser(createUserOrderDto) {
        return this.usersService.createUser(createUserOrderDto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findProvince() {
        return this.usersService.findProvince();
    }
    findAllLogs() {
        return this.usersLogsService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
    addLogs(createUserLogsDto) {
        return this.usersLogsService.create(createUserLogsDto);
    }
    changePassword(changePassword) {
        return this.usersService.changePassword(changePassword);
    }
    rememberPassword(req) {
        return this.usersService.rememberPassword(req.user.email);
    }
    findLogsByUser(user) {
        return this.usersLogsService.findByUser(user);
    }
};
__decorate([
    common_1.Post(),
    roles_decorator_1.Roles("Admin"),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Post("create"),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserOrderDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Get(),
    roles_decorator_1.Roles("Admin"),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get("province"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findProvince", null);
__decorate([
    common_1.Get("userlogs"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllLogs", null);
__decorate([
    common_1.Get(":id"),
    roles_decorator_1.Roles("Admin"),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    common_1.Put(":id"),
    roles_decorator_1.Roles("Admin"),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    roles_decorator_1.Roles("Admin"),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    common_1.Post("userlogs"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserLogsDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addLogs", null);
__decorate([
    common_1.Post("change_password"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.ChangePassword]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changePassword", null);
__decorate([
    common_1.Post("remember_password"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "rememberPassword", null);
__decorate([
    common_1.Get("userlogs/:user"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("user")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findLogsByUser", null);
UsersController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("users"),
    common_1.Controller("api/users"),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        users_logs_service_1.UsersLogsService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map