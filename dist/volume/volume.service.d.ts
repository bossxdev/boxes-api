import { Volume } from "./entities/volume.entity";
import { CreateVolumeDto } from "./dto/create-volume.dto";
import { UpdateVolumeDto } from "./dto/update-volume.dto";
import { Repository } from "typeorm";
export declare class VolumeService {
    private volumeRepo;
    constructor(volumeRepo: Repository<Volume>);
    create(createVolumeDto: CreateVolumeDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateVolumeDto: UpdateVolumeDto): Promise<any>;
    updaetActive(id: number, active: any): Promise<any>;
    remove(id: number): Promise<any>;
}
