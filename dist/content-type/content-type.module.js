"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTypeModule = void 0;
const content_type_entity_1 = require("./entities/content-type.entity");
const common_1 = require("@nestjs/common");
const content_type_service_1 = require("./content-type.service");
const content_type_controller_1 = require("./content-type.controller");
const typeorm_1 = require("@nestjs/typeorm");
let ContentTypeModule = class ContentTypeModule {
};
ContentTypeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([content_type_entity_1.ContentType])],
        controllers: [content_type_controller_1.ContentTypeController],
        providers: [content_type_service_1.ContentTypeService],
    })
], ContentTypeModule);
exports.ContentTypeModule = ContentTypeModule;
//# sourceMappingURL=content-type.module.js.map