import { NotFoundException } from "@nestjs/common";
// import { Roles } from './../roles/entities/role.entity';
import { Users } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  ChangePassword,
  CreateUserDto,
  CreateUserOrderDto,
} from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Repository } from "typeorm";

import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { sendMail } from "src/utils/email.utils";
import { JwtService } from "@nestjs/jwt";
import { Province } from "./entities/province.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepo: Repository<Users>,
    @InjectRepository(Province) private provinceRepo: Repository<Province>,
    private jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const checkname = await this.findOneByEmail(createUserDto.email);
    if (checkname) throw new NotFoundException("Duplicate data.");
    createUserDto.password = this.hashPassword(createUserDto.password);
    const newUser = await this.usersRepo.create(createUserDto);
    const result = await this.usersRepo.save(newUser);
    if (!result) throw new NotFoundException("cannot save data.");
    else return { data: result };
  }

  async createUser(createUserOrderDto: CreateUserOrderDto): Promise<any> {
    createUserOrderDto.role = await 2; // to become User
    const checkname = await this.findOneByEmail(createUserOrderDto.email);
    if (checkname) throw new NotFoundException("Duplicate data.");
    createUserOrderDto.password = this.hashPassword(
      createUserOrderDto.password
    );
    const newUser = await this.usersRepo.create(createUserOrderDto);
    const result = await this.usersRepo.save(newUser);

    const resultData: any = await this.usersRepo.findOne(result.id, {
      relations: ["province", "bill_province"],
    });
    delete resultData.password;
    if (!result) throw new NotFoundException("cannot save data.");
    else return { data: resultData };
  }

  async findProvince(): Promise<any> {
    const resultData = await this.provinceRepo.find();
    return { data: resultData };
  }

  async findAll(): Promise<any> {
    const result = await this.usersRepo.find({
      relations: ["role"],
      where: { is_active: true },
      order: {
        id: "DESC",
      },
    });
    const resultData: any = result.map((user) => {
      delete user.password;
      return user;
    });
    return { data: resultData };
  }

  async findOne(id: number): Promise<any> {
    const result = await this.usersRepo.findOne(id, {
      relations: ["role"],
    });
    delete result.password;
    if (!result || !result.is_active)
      throw new NotFoundException("cannot save data");
    else return { data: result };
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    let result = await this.usersRepo.findOne(id);
    if (!result || !result.is_active)
      throw new NotFoundException("cannot save data.");

    //const user = await this.usersRepo.create(updateUserDto);
    const user: any = {
      name: updateUserDto.name,
      lastname: updateUserDto.lastname,
      role: updateUserDto.role,
    };

    const resultUpdate = await this.usersRepo.update(id, user);
    result = await this.usersRepo.findOne(id, {
      relations: ["role"],
    });
    if (!resultUpdate) throw new NotFoundException(" cannot save data");
    else return { data: result };
  }

  async remove(id: number): Promise<any> {
    const result = await this.usersRepo.findOne(id);
    if (!result || !result.is_active)
      throw new NotFoundException("cannot save data.");
    const resultUpdate = await this.usersRepo.update(id, { is_active: false });

    if (!resultUpdate) throw new NotFoundException("cannot save data.");
    else return { statusCode: "200", message: "" };
  }

  async findOneByEmail(email: string): Promise<any> {
    const checkname = await this.usersRepo.findOne(
      {
        email: email,
        is_active: true,
      },
      {
        relations: ["role"],
      }
    );
    if (checkname) return checkname;
    else return false;
  }

  public hashPassword(password: string): string {
    return hashSync(password, genSaltSync());
  }

  async validatePassword(
    inputPassword: string,
    password: string
  ): Promise<boolean> {
    return compareSync(inputPassword, password);
  }

  async changePassword(changePassword: ChangePassword): Promise<any> {
    const newData: any = {
      email: changePassword.email,
      password: changePassword.password,
      newPassword: changePassword.new_password,
      newPasswordAgain: changePassword.new_password_again,
    };

    const checkUser: any = await this.findOneByEmail(newData.email);
    if (!checkUser) throw new NotFoundException("User not found");
    if (!(await this.validatePassword(newData.password, checkUser.password)))
      throw new NotFoundException("password incorrect.");
    if (newData.newPassword != newData.newPasswordAgain)
      throw new NotFoundException("password must same.");
    newData.newPassword = this.hashPassword(newData.newPassword);
    const result: any = await this.usersRepo.update(checkUser.id, {
      password: newData.newPassword,
    });
    if (result) return { data: [] };
  }

  async rememberPassword(email: string): Promise<any> {
    const checkUser: any = await this.findOneByEmail(email);
    if (!checkUser) throw new NotFoundException("User not found.");
    const token = await this.jwtService.sign({
      email: email,
    });

    /// Send Email ///

    const htmlBody: string =
      'กดลิงค์นี้ เพื่อ รีเซ็ท รหัสผ่าน <a href="PATH/remember_password/' +
      token +
      '">สร้างรหัสผ่าน</a>';
    const statusMail = sendMail(email, "ขอเปลี่ยนรหัสผ่าน", htmlBody);
    if (statusMail) return { data: [] };
    else throw new NotFoundException("not success");
  }

  async saveNewPassword(email: string, password: string): Promise<any> {}

  async tokenUpdate(id, token): Promise<boolean> {
    const updateUser: any = await this.usersRepo.update(id, token);
    if (updateUser) return true;
    else return false;
  }

  async checkJwtToken(id: any, token: string): Promise<any> {
    const result = await this.usersRepo.findOne({
      id: id,
      token: token,
    });

    if (result) return true;
    else return false;
  }
}
