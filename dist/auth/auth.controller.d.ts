import { AuthService } from "./../auth/auth.service";
import { LoginDto } from "./dto/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: LoginDto): Promise<{
        access_token: string;
        token_type: string;
    }>;
}
