"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const email_utils_1 = require("../utils/email.utils");
const jwt_1 = require("@nestjs/jwt");
const province_entity_1 = require("./entities/province.entity");
let UsersService = class UsersService {
    constructor(usersRepo, provinceRepo, jwtService) {
        this.usersRepo = usersRepo;
        this.provinceRepo = provinceRepo;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const checkname = await this.findOneByEmail(createUserDto.email);
        if (checkname)
            throw new common_1.NotFoundException("Duplicate data.");
        createUserDto.password = this.hashPassword(createUserDto.password);
        const newUser = await this.usersRepo.create(createUserDto);
        const result = await this.usersRepo.save(newUser);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: result };
    }
    async createUser(createUserOrderDto) {
        createUserOrderDto.role = await 2;
        const checkname = await this.findOneByEmail(createUserOrderDto.email);
        if (checkname)
            throw new common_1.NotFoundException("Duplicate data.");
        createUserOrderDto.password = this.hashPassword(createUserOrderDto.password);
        const newUser = await this.usersRepo.create(createUserOrderDto);
        const result = await this.usersRepo.save(newUser);
        const resultData = await this.usersRepo.findOne(result.id, {
            relations: ["province", "bill_province"],
        });
        delete resultData.password;
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { data: resultData };
    }
    async findProvince() {
        const resultData = await this.provinceRepo.find();
        return { data: resultData };
    }
    async findAll() {
        const result = await this.usersRepo.find({
            relations: ["role"],
            where: { is_active: true },
            order: {
                id: "DESC",
            },
        });
        const resultData = result.map((user) => {
            delete user.password;
            return user;
        });
        return { data: resultData };
    }
    async findOne(id) {
        const result = await this.usersRepo.findOne(id, {
            relations: ["role"],
        });
        delete result.password;
        if (!result || !result.is_active)
            throw new common_1.NotFoundException("cannot save data");
        else
            return { data: result };
    }
    async update(id, updateUserDto) {
        let result = await this.usersRepo.findOne(id);
        if (!result || !result.is_active)
            throw new common_1.NotFoundException("cannot save data.");
        const user = {
            name: updateUserDto.name,
            lastname: updateUserDto.lastname,
            role: updateUserDto.role,
        };
        const resultUpdate = await this.usersRepo.update(id, user);
        result = await this.usersRepo.findOne(id, {
            relations: ["role"],
        });
        if (!resultUpdate)
            throw new common_1.NotFoundException(" cannot save data");
        else
            return { data: result };
    }
    async remove(id) {
        const result = await this.usersRepo.findOne(id);
        if (!result || !result.is_active)
            throw new common_1.NotFoundException("cannot save data.");
        const resultUpdate = await this.usersRepo.update(id, { is_active: false });
        if (!resultUpdate)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { statusCode: "200", message: "" };
    }
    async findOneByEmail(email) {
        const checkname = await this.usersRepo.findOne({
            email: email,
            is_active: true,
        }, {
            relations: ["role"],
        });
        if (checkname)
            return checkname;
        else
            return false;
    }
    hashPassword(password) {
        return bcrypt_1.hashSync(password, bcrypt_1.genSaltSync());
    }
    async validatePassword(inputPassword, password) {
        return bcrypt_1.compareSync(inputPassword, password);
    }
    async changePassword(changePassword) {
        const newData = {
            email: changePassword.email,
            password: changePassword.password,
            newPassword: changePassword.new_password,
            newPasswordAgain: changePassword.new_password_again,
        };
        const checkUser = await this.findOneByEmail(newData.email);
        if (!checkUser)
            throw new common_1.NotFoundException("User not found");
        if (!(await this.validatePassword(newData.password, checkUser.password)))
            throw new common_1.NotFoundException("password incorrect.");
        if (newData.newPassword != newData.newPasswordAgain)
            throw new common_1.NotFoundException("password must same.");
        newData.newPassword = this.hashPassword(newData.newPassword);
        const result = await this.usersRepo.update(checkUser.id, {
            password: newData.newPassword,
        });
        if (result)
            return { data: [] };
    }
    async rememberPassword(email) {
        const checkUser = await this.findOneByEmail(email);
        if (!checkUser)
            throw new common_1.NotFoundException("User not found.");
        const token = await this.jwtService.sign({
            email: email,
        });
        const htmlBody = 'กดลิงค์นี้ เพื่อ รีเซ็ท รหัสผ่าน <a href="PATH/remember_password/' +
            token +
            '">สร้างรหัสผ่าน</a>';
        const statusMail = email_utils_1.sendMail(email, "ขอเปลี่ยนรหัสผ่าน", htmlBody);
        if (statusMail)
            return { data: [] };
        else
            throw new common_1.NotFoundException("not success");
    }
    async saveNewPassword(email, password) { }
    async tokenUpdate(id, token) {
        const updateUser = await this.usersRepo.update(id, token);
        if (updateUser)
            return true;
        else
            return false;
    }
    async checkJwtToken(id, token) {
        const result = await this.usersRepo.findOne({
            id: id,
            token: token,
        });
        if (result)
            return true;
        else
            return false;
    }
};
UsersService = __decorate([
    common_2.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.Users)),
    __param(1, typeorm_1.InjectRepository(province_entity_1.Province)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map