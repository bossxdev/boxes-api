import { DhlTrackingService } from "./dhl-tracking.service";
import { CreateDhlTrackingDto } from "./dto/create-dhl-tracking.dto";
import { UpdateDhlTrackingDto } from "./dto/update-dhl-tracking.dto";
export declare class DhlTrackingController {
    private readonly dhlTrackingService;
    constructor(dhlTrackingService: DhlTrackingService);
    create(createDhlTrackingDto: CreateDhlTrackingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDhlTrackingDto: UpdateDhlTrackingDto): string;
    remove(id: string): string;
}
