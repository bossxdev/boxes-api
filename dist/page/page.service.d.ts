import { CreatePageDto } from "./dto/create-page.dto";
import { UpdatePageDto } from "./dto/update-page.dto";
export declare class PageService {
    create(createPageDto: CreatePageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePageDto: UpdatePageDto): string;
    remove(id: number): string;
}
