import { VolumeService } from "./volume.service";
import { CreateVolumeDto } from "./dto/create-volume.dto";
import { UpdateVolumeDto } from "./dto/update-volume.dto";
export declare class VolumeController {
    private readonly volumeService;
    constructor(volumeService: VolumeService);
    create(createVolumeDto: CreateVolumeDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    updateActive(id: string, res: any): Promise<any>;
    update(id: string, updateVolumeDto: UpdateVolumeDto): Promise<any>;
    remove(id: string): Promise<any>;
}
