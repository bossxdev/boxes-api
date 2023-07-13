import { WebSettingService } from "./web-setting.service";
import { UpdateWebSettingDto } from "./dto/update-web-setting.dto";
export declare class WebSettingController {
    private readonly webSettingService;
    constructor(webSettingService: WebSettingService);
    findOne(): Promise<any>;
    update(updateWebSettingDto: UpdateWebSettingDto): Promise<any>;
}
