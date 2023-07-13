"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeModule = void 0;
const volume_entity_1 = require("./entities/volume.entity");
const common_1 = require("@nestjs/common");
const volume_service_1 = require("./volume.service");
const volume_controller_1 = require("./volume.controller");
const typeorm_1 = require("@nestjs/typeorm");
let VolumeModule = class VolumeModule {
};
VolumeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([volume_entity_1.Volume])],
        controllers: [volume_controller_1.VolumeController],
        providers: [volume_service_1.VolumeService],
    })
], VolumeModule);
exports.VolumeModule = VolumeModule;
//# sourceMappingURL=volume.module.js.map