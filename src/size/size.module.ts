import { Size } from "./entities/size.entity";
import { Module } from "@nestjs/common";
import { SizeService } from "./size.service";
import { SizeController } from "./size.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Size])],
  controllers: [SizeController],
  providers: [SizeService],
})
export class SizeModule {}
