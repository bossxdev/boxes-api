"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DhlTrackingModule = void 0;
const common_1 = require("@nestjs/common");
const dhl_tracking_service_1 = require("./dhl-tracking.service");
const dhl_tracking_controller_1 = require("./dhl-tracking.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dhl_tracking_entity_1 = require("./entities/dhl-tracking.entity");
let DhlTrackingModule = class DhlTrackingModule {
};
DhlTrackingModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([dhl_tracking_entity_1.DhlTracking])],
        controllers: [dhl_tracking_controller_1.DhlTrackingController],
        providers: [dhl_tracking_service_1.DhlTrackingService],
    })
], DhlTrackingModule);
exports.DhlTrackingModule = DhlTrackingModule;
//# sourceMappingURL=dhl-tracking.module.js.map