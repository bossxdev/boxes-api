import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStatusDto } from "./dto/create-status.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { Status } from "./entities/status.entity";

@Injectable()
export class StatusesService {
  constructor(
    @InjectRepository(Status)
    private status: Repository<Status>
  ) {}

  create(createStatusDto: CreateStatusDto) {
    return "This action adds a new status";
  }

  async findAll(): Promise<any> {
    return this.status.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} status`;
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: number) {
    return `This action removes a #${id} status`;
  }
}
