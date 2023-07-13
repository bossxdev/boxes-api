import { EstimateSettingService } from "./estimate-setting.service";
import { CreateEstimateSettingDto } from "./dto/create-estimate-setting.dto";
import { UpdateEstimateSettingDto } from "./dto/update-estimate-setting.dto";
export declare class EstimateSettingController {
    private readonly estimateSettingService;
    constructor(estimateSettingService: EstimateSettingService);
    create(createEstimateSettingDto: CreateEstimateSettingDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<object>;
    update(id: string, updateEstimateSettingDto: UpdateEstimateSettingDto): Promise<any>;
    updateActive(id: string, res: any): Promise<any>;
    remove(id: string): Promise<any>;
}
