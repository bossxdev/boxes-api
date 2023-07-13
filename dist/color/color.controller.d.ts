import { ColorService } from "./color.service";
import { CreateColorDto } from "./dto/create-color.dto";
import { UpdateColorDto } from "./dto/update-color.dto";
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    create(createColorDto: CreateColorDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    updateActive(id: string, res: any): Promise<any>;
    update(id: string, updateColorDto: UpdateColorDto): Promise<any>;
    remove(id: string): Promise<any>;
}
