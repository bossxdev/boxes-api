"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSettingModule = void 0;
const common_1 = require("@nestjs/common");
const web_setting_service_1 = require("./web-setting.service");
const web_setting_controller_1 = require("./web-setting.controller");
const web_setting_entity_1 = require("./entities/web-setting.entity");
const typeorm_1 = require("@nestjs/typeorm");
let WebSettingModule = class WebSettingModule {
};
WebSettingModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([web_setting_entity_1.WebSetting])],
        controllers: [web_setting_controller_1.WebSettingController],
        providers: [web_setting_service_1.WebSettingService],
    })
], WebSettingModule);
exports.WebSettingModule = WebSettingModule;
//# sourceMappingURL=web-setting.module.js.map