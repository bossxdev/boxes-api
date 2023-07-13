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
exports.ContentTypeService = void 0;
const content_type_entity_1 = require("./entities/content-type.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ContentTypeService = class ContentTypeService {
    constructor(contentTypeRepo) {
        this.contentTypeRepo = contentTypeRepo;
    }
    async create(createContentTypeDto) {
        const newData = await this.contentTypeRepo.create(createContentTypeDto);
        const result = await this.contentTypeRepo.save(newData);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: result };
    }
    async findAll() {
        const result = await this.contentTypeRepo.find({
            order: {
                id: "DESC",
            },
        });
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: result };
    }
    async findOne(id) {
        const result = await this.contentTypeRepo.findOne(id);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: result };
    }
    async update(id, updateContentTypeDto) {
        const newData = await this.contentTypeRepo.create(updateContentTypeDto);
        const result = await this.contentTypeRepo.update(id, newData);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: result };
    }
    async updaetActive(id, active) {
        const checkData = await this.contentTypeRepo.findOne(+id);
        if (!checkData)
            throw new common_1.NotFoundException("Not found");
        const result = await this.contentTypeRepo.update(+id, active);
        if (!result)
            throw new common_1.NotFoundException("cannot update");
        return { result };
    }
    async remove(id) {
        const result = await this.contentTypeRepo.delete(id);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: result };
    }
};
ContentTypeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(content_type_entity_1.ContentType)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ContentTypeService);
exports.ContentTypeService = ContentTypeService;
//# sourceMappingURL=content-type.service.js.map