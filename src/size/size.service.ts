import { Size } from "./entities/size.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateSizeDto } from "./dto/create-size.dto";
import { UpdateSizeActiveDto, UpdateSizeDto } from "./dto/update-size.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class SizeService {
  constructor(@InjectRepository(Size) private sizeRepo: Repository<Size>) {}
  async create(createSizeDto: CreateSizeDto): Promise<any> {
    const newData = await this.sizeRepo.create(createSizeDto);
    const result = await this.sizeRepo.save(newData);
    if (result) return { data: result };
    else throw new NotFoundException("cannot save data.");
  }

  async findAll(): Promise<any> {
    const result = await this.sizeRepo.find({
      order: {
        id: "DESC",
      },
    });
    if (result) return { data: result };
    else throw new NotFoundException("cannot save data.");
  }

  async findOne(id: number): Promise<any> {
    const result = await this.sizeRepo.findOne(id);
    if (result) return { data: result };
    else throw new NotFoundException("cannot save data.");
  }

  async update(id: number, updateSizeDto: UpdateSizeDto): Promise<any> {
    const newData = await this.sizeRepo.create(updateSizeDto);
    const result = await this.sizeRepo.update(id, newData);
    const data = await this.sizeRepo.findOne(id);
    if (result) return { data: data };
    else throw new NotFoundException("cannot save data.");
  }

  async updaetActive(id: number, active: UpdateSizeActiveDto): Promise<any> {
    const checkData = await this.sizeRepo.findOne(+id);
    if (!checkData) throw new NotFoundException("Not found");
    const result = await this.sizeRepo.update(+id, {
      is_active: active.is_active,
    });
    if (!result) throw new NotFoundException("cannot update");
    return { result };
  }

  async remove(id: number): Promise<any> {
    const check = await this.sizeRepo.findOne(id);

    if (!check) throw new NotFoundException("not found data.");

    const result = await this.sizeRepo.delete(id);
    if (result) return { data: result };
    else throw new NotFoundException("cannot save data.");
  }
}
