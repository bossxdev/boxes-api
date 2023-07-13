import { UsersLogsService } from "./users-logs.service";
import { Users, Userlogs } from "./entities/user.entity";
import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "src/auth/constants";
import { Province } from "./entities/province.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Userlogs, Province]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersLogsService],
  exports: [UsersService, UsersLogsService],
})
export class UsersModule {}
