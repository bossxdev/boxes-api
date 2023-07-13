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
exports.WebSettingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const web_setting_entity_1 = require("./entities/web-setting.entity");
let WebSettingService = class WebSettingService {
    constructor(webSettingRepo) {
        this.webSettingRepo = webSettingRepo;
    }
    async findOne(id) {
        const addData = await this.webSettingRepo.findOne({ id: id });
        if (!addData)
            throw new common_1.NotFoundException("not found data");
        return addData;
    }
    async update(id, updateWebSettingDto) {
        const addData = await this.webSettingRepo.findOne({ id: id });
        if (!addData)
            throw new common_1.NotFoundException("not found data");
        const updateData = await this.webSettingRepo.update(id, updateWebSettingDto);
        if (updateData)
            return updateData;
        throw new common_1.NotFoundException("cannot save data");
    }
};
WebSettingService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(web_setting_entity_1.WebSetting)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WebSettingService);
exports.WebSettingService = WebSettingService;
//# sourceMappingURL=web-setting.service.js.map