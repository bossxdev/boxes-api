import { Color } from "./entities/color.entity";
import { CreateColorDto } from "./dto/create-color.dto";
import { UpdateColorDto } from "./dto/update-color.dto";
import { Repository } from "typeorm";
export declare class ColorService {
    private colorRepo;
    constructor(colorRepo: Repository<Color>);
    create(createColorDto: CreateColorDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateColorDto: UpdateColorDto): Promise<any>;
    updaetActive(id: number, active: any): Promise<any>;
    remove(id: number): Promise<any>;
}
