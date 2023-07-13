import { Module } from "@nestjs/common";
import { DhlTrackingService } from "./dhl-tracking.service";
import { DhlTrackingController } from "./dhl-tracking.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DhlTracking } from "./entities/dhl-tracking.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DhlTracking])],
  controllers: [DhlTrackingController],
  providers: [DhlTrackingService],
})
export class DhlTrackingModule {}
