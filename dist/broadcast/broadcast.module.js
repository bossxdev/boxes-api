"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastModule = void 0;
const common_1 = require("@nestjs/common");
const broadcast_service_1 = require("./broadcast.service");
const broadcast_controller_1 = require("./broadcast.controller");
const typeorm_1 = require("@nestjs/typeorm");
const broadcast_entity_1 = require("./entities/broadcast.entity");
let BroadcastModule = class BroadcastModule {
};
BroadcastModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([broadcast_entity_1.Broadcast])],
        controllers: [broadcast_controller_1.BroadcastController],
        providers: [broadcast_service_1.BroadcastService],
    })
], BroadcastModule);
exports.BroadcastModule = BroadcastModule;
//# sourceMappingURL=broadcast.module.js.map