"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DhlTrackingService = void 0;
const common_1 = require("@nestjs/common");
let DhlTrackingService = class DhlTrackingService {
    create(createDhlTrackingDto) {
        return "This action adds a new dhlTracking";
    }
    findAll() {
        return `This action returns all dhlTracking`;
    }
    findOne(id) {
        return `This action returns a #${id} dhlTracking`;
    }
    update(id, updateDhlTrackingDto) {
        return `This action updates a #${id} dhlTracking`;
    }
    remove(id) {
        return `This action removes a #${id} dhlTracking`;
    }
};
DhlTrackingService = __decorate([
    common_1.Injectable()
], DhlTrackingService);
exports.DhlTrackingService = DhlTrackingService;
//# sourceMappingURL=dhl-tracking.service.js.map