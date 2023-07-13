import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { config } from "./orm.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RolesModule } from "./roles/roles.module";
import { AuthModule } from "./auth/auth.module";
import { MulterModule } from "@nestjs/platform-express";
import { SizeModule } from "./size/size.module";
import { ColorModule } from "./color/color.module";
import { OrderDetailModule } from "./order-detail/order-detail.module";
import { PageModule } from "./page/page.module";
import { ConfigModule } from "@nestjs/config";
import { EstimateSettingModule } from "./estimate-setting/estimate-setting.module";
import { StatusesModule } from "./statuses/statuses.module";
import { PaymentDetailModule } from "./payment-detail/payment-detail.module";
import { DhlTrackingModule } from "./dhl-tracking/dhl-tracking.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env" }),
    UsersModule,
    TypeOrmModule.forRoot(config),
    RolesModule,
    AuthModule,
    MulterModule.register({
      dest: "./src/images",
    }),
    SizeModule,
    ColorModule,
    OrderDetailModule,
    PageModule,
    EstimateSettingModule,
    StatusesModule,
    PaymentDetailModule,
    DhlTrackingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
