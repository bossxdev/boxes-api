import { CreateDhlTrackingDto } from "./dto/create-dhl-tracking.dto";
import { UpdateDhlTrackingDto } from "./dto/update-dhl-tracking.dto";
export declare class DhlTrackingService {
    create(createDhlTrackingDto: CreateDhlTrackingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDhlTrackingDto: UpdateDhlTrackingDto): string;
    remove(id: number): string;
}
