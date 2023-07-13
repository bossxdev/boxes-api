import { ContentTypeService } from "./content-type.service";
import { CreateContentTypeDto } from "./dto/create-content-type.dto";
import { UpdateContentTypeDto } from "./dto/update-content-type.dto";
export declare class ContentTypeController {
    private readonly contentTypeService;
    constructor(contentTypeService: ContentTypeService);
    create(createContentTypeDto: CreateContentTypeDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    updateActive(id: string, res: any): Promise<any>;
    update(id: string, updateContentTypeDto: UpdateContentTypeDto): Promise<any>;
    remove(id: string): Promise<any>;
}
