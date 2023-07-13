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
exports.EstimateSettingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estimate_setting_entity_1 = require("./entities/estimate-setting.entity");
let EstimateSettingService = class EstimateSettingService {
    constructor(estimateRepo) {
        this.estimateRepo = estimateRepo;
    }
    async create(createEstimateSettingDto) {
        const getData = await this.estimateRepo.create(createEstimateSettingDto);
        const saveData = await this.estimateRepo.save(getData);
        if (!saveData)
            throw new common_1.NotFoundException("cannot save data.");
        return { data: saveData };
    }
    async findAll() {
        const findData = await this.estimateRepo.find();
        return { data: findData };
    }
    async findOne(id) {
        const findData = await this.estimateRepo.findOne(id);
        return { data: findData };
    }
    async update(id, updateEstimateSettingDto) {
        const getData = await this.estimateRepo.findOne(id);
        if (!getData)
            throw new common_1.NotFoundException("Not found data");
        const findData = await this.estimateRepo.update(id, updateEstimateSettingDto);
        return { data: findData };
    }
    async updateActive(id, active) {
        const checkData = await this.estimateRepo.findOne(id);
        if (!checkData)
            throw new common_1.NotFoundException("Not found");
        const result = await this.estimateRepo.update(id, active);
        if (!result)
            throw new common_1.NotFoundException("cannot update");
        return { data: result };
    }
    async remove(id) {
        const getData = await this.estimateRepo.delete(id);
        return { data: getData };
    }
};
EstimateSettingService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(estimate_setting_entity_1.EstimateSetting)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EstimateSettingService);
exports.EstimateSettingService = EstimateSettingService;
//# sourceMappingURL=estimate-setting.service.js.map