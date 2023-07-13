import { Color } from "./entities/color.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateColorDto } from "./dto/create-color.dto";
import { UpdateColorDto } from "./dto/update-color.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(Color)
    private colorRepo: Repository<Color>
  ) {}
  async create(createColorDto: CreateColorDto): Promise<any> {
    const checkname = await this.colorRepo.findOne({
      name: createColorDto.name,
    });
    if (checkname)
      return {
        statusCode: 400,
        message: createColorDto.name + " Duplicate data.",
      };
    const newData = await this.colorRepo.create(createColorDto);
    const result = await this.colorRepo.save(newData);
    if (result) return { data: result };
    else throw new NotFoundException("cannot save data.");
  }

  async findAll(): Promise<any> {
    const result = await this.colorRepo.find({
      order: {
        id: "DESC",
      },
    });
    if (result) return { data: result };
    else throw new NotFoundException("cannot save data.");
  }

  async findOne(id: number): Promise<any> {
    const result = await this.colorRepo.findOne(id);
    if (result) return { data: result };
    else throw new NotFoundException("cannot save data.");
  }

  async update(id: number, updateColorDto: UpdateColorDto): Promise<any> {
    const newData = await this.colorRepo.create(updateColorDto);
    const result = await this.colorRepo.update(id, newData);
    const data = await this.colorRepo.findOne(id);
    if (result) return { data: data };
    else throw new NotFoundException("cannot save data.");
  }

  async updaetActive(id: number, active: any): Promise<any> {
    const checkData = await this.colorRepo.findOne(+id);
    if (!checkData) throw new NotFoundException("Not found");
    const result = await this.colorRepo.update(+id, active);
    if (!result) throw new NotFoundException("cannot update");
    return { result };
  }

  async remove(id: number): Promise<any> {
    const result = await this.colorRepo.delete(id);
    if (result) return { data: result };
    else throw new NotFoundException("cannot save data.");
  }
}
