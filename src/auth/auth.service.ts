import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      return { statusCode: 400, message: "email invalid" };
    }
    const validatePassword = await this.usersService.validatePassword(
      password,
      user.password
    );

    if (user && validatePassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const checkname = await this.usersService.findOneByEmail(user.email);
    if (!checkname) throw new NotFoundException("email invalid");

    const token = this.jwtService.sign({
      email: checkname.email,
      role: checkname.role.name,
      id: checkname.id,
      roleId: checkname.role.id,
      sub: {
        createdAt: checkname.createdAt,
        updatedAt: checkname.updatedAt,
      },
    });
    await this.usersService.tokenUpdate(checkname.id, { token: token });
    return {
      access_token: token,
      token_type: "Bearer",
    };
  }
}
