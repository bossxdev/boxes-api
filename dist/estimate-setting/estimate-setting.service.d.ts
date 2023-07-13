import { Repository } from "typeorm";
import { CreateEstimateSettingDto } from "./dto/create-estimate-setting.dto";
import { UpdateEstimateSettingDto } from "./dto/update-estimate-setting.dto";
import { EstimateSetting } from "./entities/estimate-setting.entity";
export declare class EstimateSettingService {
    private estimateRepo;
    constructor(estimateRepo: Repository<EstimateSetting>);
    create(createEstimateSettingDto: CreateEstimateSettingDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<object>;
    update(id: number, updateEstimateSettingDto: UpdateEstimateSettingDto): Promise<any>;
    updateActive(id: number, active: any): Promise<any>;
    remove(id: number): Promise<any>;
}
