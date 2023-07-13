import { Repository } from "typeorm";
import { UpdateWebSettingDto } from "./dto/update-web-setting.dto";
import { WebSetting } from "./entities/web-setting.entity";
export declare class WebSettingService {
    private webSettingRepo;
    constructor(webSettingRepo: Repository<WebSetting>);
    findOne(id: number): Promise<any>;
    update(id: number, updateWebSettingDto: UpdateWebSettingDto): Promise<any>;
}
