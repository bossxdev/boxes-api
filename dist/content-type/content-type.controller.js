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
exports.ContentTypeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const content_type_service_1 = require("./content-type.service");
const create_content_type_dto_1 = require("./dto/create-content-type.dto");
const update_content_type_dto_1 = require("./dto/update-content-type.dto");
let ContentTypeController = class ContentTypeController {
    constructor(contentTypeService) {
        this.contentTypeService = contentTypeService;
    }
    create(createContentTypeDto) {
        return this.contentTypeService.create(createContentTypeDto);
    }
    findAll() {
        return this.contentTypeService.findAll();
    }
    findOne(id) {
        return this.contentTypeService.findOne(+id);
    }
    updateActive(id, res) {
        return this.contentTypeService.updaetActive(+id, res);
    }
    update(id, updateContentTypeDto) {
        return this.contentTypeService.update(+id, updateContentTypeDto);
    }
    remove(id) {
        return this.contentTypeService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_content_type_dto_1.CreateContentTypeDto]),
    __metadata("design:returntype", void 0)
], ContentTypeController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentTypeController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentTypeController.prototype, "findOne", null);
__decorate([
    common_1.Put("active/:id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentTypeController.prototype, "updateActive", null);
__decorate([
    common_1.Put(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_content_type_dto_1.UpdateContentTypeDto]),
    __metadata("design:returntype", void 0)
], ContentTypeController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentTypeController.prototype, "remove", null);
ContentTypeController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("content type"),
    common_1.Controller("api/content-type"),
    __metadata("design:paramtypes", [content_type_service_1.ContentTypeService])
], ContentTypeController);
exports.ContentTypeController = ContentTypeController;
//# sourceMappingURL=content-type.controller.js.map