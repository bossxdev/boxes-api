import { Injectable } from "@nestjs/common";
import { CreateDhlTrackingDto } from "./dto/create-dhl-tracking.dto";
import { UpdateDhlTrackingDto } from "./dto/update-dhl-tracking.dto";

@Injectable()
export class DhlTrackingService {
  create(createDhlTrackingDto: CreateDhlTrackingDto) {
    return "This action adds a new dhlTracking";
  }

  findAll() {
    return `This action returns all dhlTracking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dhlTracking`;
  }

  update(id: number, updateDhlTrackingDto: UpdateDhlTrackingDto) {
    return `This action updates a #${id} dhlTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} dhlTracking`;
  }
}
