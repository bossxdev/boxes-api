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
exports.BroadcastService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const broadcast_entity_1 = require("./entities/broadcast.entity");
let BroadcastService = class BroadcastService {
    constructor(broadcastRepo) {
        this.broadcastRepo = broadcastRepo;
    }
    async create(createBroadcastDto) {
        const data = await this.broadcastRepo.create(createBroadcastDto);
        const saveData = await this.broadcastRepo.save(data);
        if (!broadcast_entity_1.Broadcast)
            throw new common_1.NotAcceptableException("Cannot save data");
        return saveData;
    }
    async findAll() {
        const data = await this.broadcastRepo.find();
        if (!data)
            throw new common_1.NotAcceptableException("Cannot get data");
        return data;
    }
    async findOne(id) {
        const data = await this.broadcastRepo.findOne({ id: id });
        if (!data)
            throw new common_1.NotAcceptableException("Cannot get data");
        return data;
    }
    async update(id, updateBroadcastDto) {
        const getData = await this.broadcastRepo.findOne({ id: id });
        if (!getData)
            throw new common_1.NotFoundException("Not found data");
        const newData = Object.assign(Object.assign({}, getData), { updateBroadcastDto });
        const updateData = await this.broadcastRepo.update(id, newData);
        if (!updateData)
            throw new common_1.NotAcceptableException("Cannot save data");
        return updateData;
    }
    async remove(id) {
        const getData = await this.broadcastRepo.findOne({ id: id });
        if (!getData)
            throw new common_1.NotFoundException("Not found data");
        const deleteData = await this.broadcastRepo.delete(id);
        if (!deleteData)
            throw new common_1.NotAcceptableException("Cannot delete data");
        return deleteData;
    }
    async sendBroadcast(id) {
        return {};
    }
};
BroadcastService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(broadcast_entity_1.Broadcast)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BroadcastService);
exports.BroadcastService = BroadcastService;
//# sourceMappingURL=broadcast.service.js.map