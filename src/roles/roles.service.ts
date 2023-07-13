import { Roles } from "./entities/role.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { Repository } from "typeorm";

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Roles) private rolesRepo: Repository<Roles>) {}

  async create(createRoleDto: CreateRoleDto): Promise<any> {
    const checkname = await this.rolesRepo.findOne({
      name: createRoleDto.name,
    });
    if (checkname) throw new NotFoundException("Dupicate data.");
    const newRole = await this.rolesRepo.create(createRoleDto);
    const result = await this.rolesRepo.save(newRole);
    if (!result) throw new NotFoundException("cannot save data.");
    else return { statusCode: "200", message: "", data: result };
  }

  async findAll(): Promise<any> {
    const result = await this.rolesRepo.find({
      order: {
        id: "DESC",
      },
    });
    return { statusCode: "200", message: "", data: result };
  }

  async findOne(id: number): Promise<any> {
    const result = await this.rolesRepo.findOne(id);

    if (!result) throw new NotFoundException("not found data.");
    else return { statusCode: "200", message: "", data: result };
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<any> {
    let getData = await this.rolesRepo.findOne(id);
    if (!getData) throw new NotFoundException("not found data.");

    const role: object = {
      name: updateRoleDto.name,
    };
    const result = await this.rolesRepo.update(id, role);
    if (!result) throw new NotFoundException("cannot save data.");
    getData = await this.rolesRepo.findOne(id);
    if (result) return { statusCode: "200", message: "", data: getData };
  }

  async updaetActive(id: number, active: any): Promise<any> {
    const checkData = await this.rolesRepo.findOne(+id);
    if (!checkData) throw new NotFoundException("Not found");
    const result = await this.rolesRepo.update(+id, active);
    if (!result) throw new NotFoundException("cannot update");
    return { result };
  }

  async remove(id: number): Promise<any> {
    const checkData = await this.rolesRepo.findOne(id);
    if (!checkData || !checkData.is_active)
      throw new NotFoundException("not found data.");
    const result = await this.rolesRepo.delete(id);
    if (!result) throw new NotFoundException("cannot save data.");
    else return { statusCode: "200", message: "", data: [] };
  }
}
