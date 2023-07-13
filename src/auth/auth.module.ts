import { UsersModule } from "../users/users.module";
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";

import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1d" },
    }),
    PassportModule.register({ defaultStrategy: "jwt" }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
