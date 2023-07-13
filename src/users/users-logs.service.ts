import { Userlogs } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserLogsDto } from "./dto/create-user.dto";
import { Repository } from "typeorm";

@Injectable()
export class UsersLogsService {
  constructor(
    @InjectRepository(Userlogs) private logsRepo: Repository<Userlogs>
  ) {}
  async create(createUserLogsDto: CreateUserLogsDto): Promise<any> {
    const newUser = await this.logsRepo.create(createUserLogsDto);
    const result = await this.logsRepo.save(newUser);
    if (!result) return { statusCode: "400", message: "cannot save data." };
    else return { statusCode: "200", message: "", data: result };
  }
  async findAll(): Promise<any> {
    const result = await this.logsRepo.find();
    return { statusCode: "200", message: "", data: result };
  }
  async findByUser(id: number): Promise<any> {
    const result = await this.logsRepo.find({ where: { user: id } });
    return { statusCode: "200", message: "", data: result };
  }
}
