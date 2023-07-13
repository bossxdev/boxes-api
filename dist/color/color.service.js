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
exports.ColorService = void 0;
const color_entity_1 = require("./entities/color.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ColorService = class ColorService {
    constructor(colorRepo) {
        this.colorRepo = colorRepo;
    }
    async create(createColorDto) {
        const checkname = await this.colorRepo.findOne({
            name: createColorDto.name,
        });
        if (checkname)
            return {
                statusCode: 400,
                message: createColorDto.name + " Duplicate data.",
            };
        const newData = await this.colorRepo.create(createColorDto);
        const result = await this.colorRepo.save(newData);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async findAll() {
        const result = await this.colorRepo.find({
            order: {
                id: "DESC",
            },
        });
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async findOne(id) {
        const result = await this.colorRepo.findOne(id);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async update(id, updateColorDto) {
        const newData = await this.colorRepo.create(updateColorDto);
        const result = await this.colorRepo.update(id, newData);
        const data = await this.colorRepo.findOne(id);
        if (result)
            return { data: data };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async updaetActive(id, active) {
        const checkData = await this.colorRepo.findOne(+id);
        if (!checkData)
            throw new common_1.NotFoundException("Not found");
        const result = await this.colorRepo.update(+id, active);
        if (!result)
            throw new common_1.NotFoundException("cannot update");
        return { result };
    }
    async remove(id) {
        const result = await this.colorRepo.delete(id);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
};
ColorService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(color_entity_1.Color)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ColorService);
exports.ColorService = ColorService;
//# sourceMappingURL=color.service.js.map