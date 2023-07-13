"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const orm_config_1 = require("./orm.config");
const typeorm_1 = require("@nestjs/typeorm");
const roles_module_1 = require("./roles/roles.module");
const auth_module_1 = require("./auth/auth.module");
const platform_express_1 = require("@nestjs/platform-express");
const size_module_1 = require("./size/size.module");
const color_module_1 = require("./color/color.module");
const order_detail_module_1 = require("./order-detail/order-detail.module");
const page_module_1 = require("./page/page.module");
const config_1 = require("@nestjs/config");
const estimate_setting_module_1 = require("./estimate-setting/estimate-setting.module");
const statuses_module_1 = require("./statuses/statuses.module");
const payment_detail_module_1 = require("./payment-detail/payment-detail.module");
const dhl_tracking_module_1 = require("./dhl-tracking/dhl-tracking.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env" }),
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot(orm_config_1.config),
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            platform_express_1.MulterModule.register({
                dest: "./src/images",
            }),
            size_module_1.SizeModule,
            color_module_1.ColorModule,
            order_detail_module_1.OrderDetailModule,
            page_module_1.PageModule,
            estimate_setting_module_1.EstimateSettingModule,
            statuses_module_1.StatusesModule,
            payment_detail_module_1.PaymentDetailModule,
            dhl_tracking_module_1.DhlTrackingModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map