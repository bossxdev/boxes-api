import { Reflector } from "@nestjs/core";
import { UsersService } from "src/users/users.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly reflector;
    private usersService;
    constructor(reflector: Reflector, usersService: UsersService);
    validate(req: any, payload: any): Promise<false | {
        email: any;
        role: any;
        roleId: any;
        id: any;
    }>;
}
export {};
