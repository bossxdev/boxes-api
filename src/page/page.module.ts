import { Module } from "@nestjs/common";
import { PageService } from "./page.service";
import { PageController } from "./page.controller";
import { Pages } from "./entities/page.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Pages])],
  controllers: [PageController],
  providers: [PageService],
})
export class PageModule {}
