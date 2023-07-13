"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimateSettingModule = void 0;
const common_1 = require("@nestjs/common");
const estimate_setting_service_1 = require("./estimate-setting.service");
const estimate_setting_controller_1 = require("./estimate-setting.controller");
const estimate_setting_entity_1 = require("./entities/estimate-setting.entity");
const typeorm_1 = require("@nestjs/typeorm");
let EstimateSettingModule = class EstimateSettingModule {
};
EstimateSettingModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([estimate_setting_entity_1.EstimateSetting])],
        controllers: [estimate_setting_controller_1.EstimateSettingController],
        providers: [estimate_setting_service_1.EstimateSettingService],
    })
], EstimateSettingModule);
exports.EstimateSettingModule = EstimateSettingModule;
//# sourceMappingURL=estimate-setting.module.js.map