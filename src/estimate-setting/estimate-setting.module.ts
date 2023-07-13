import { Module } from "@nestjs/common";
import { EstimateSettingService } from "./estimate-setting.service";
import { EstimateSettingController } from "./estimate-setting.controller";
import { EstimateSetting } from "./entities/estimate-setting.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([EstimateSetting])],
  controllers: [EstimateSettingController],
  providers: [EstimateSettingService],
})
export class EstimateSettingModule {}
