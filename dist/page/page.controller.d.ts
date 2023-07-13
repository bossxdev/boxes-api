import { PageService } from "./page.service";
import { CreatePageDto } from "./dto/create-page.dto";
import { UpdatePageDto } from "./dto/update-page.dto";
export declare class PageController {
    private readonly pageService;
    constructor(pageService: PageService);
    create(createPageDto: CreatePageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePageDto: UpdatePageDto): string;
    remove(id: string): string;
}
