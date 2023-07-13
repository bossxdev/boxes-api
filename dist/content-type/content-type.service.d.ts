import { ContentType } from "./entities/content-type.entity";
import { CreateContentTypeDto } from "./dto/create-content-type.dto";
import { UpdateContentTypeDto } from "./dto/update-content-type.dto";
import { Repository } from "typeorm";
export declare class ContentTypeService {
    private contentTypeRepo;
    constructor(contentTypeRepo: Repository<ContentType>);
    create(createContentTypeDto: CreateContentTypeDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateContentTypeDto: UpdateContentTypeDto): Promise<any>;
    updaetActive(id: number, active: any): Promise<any>;
    remove(id: number): Promise<any>;
}
