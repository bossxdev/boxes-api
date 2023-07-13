import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEstimateSettingDto } from "./dto/create-estimate-setting.dto";
import { UpdateEstimateSettingDto } from "./dto/update-estimate-setting.dto";
import { EstimateSetting } from "./entities/estimate-setting.entity";

@Injectable()
export class EstimateSettingService {
  constructor(
    @InjectRepository(EstimateSetting)
    private estimateRepo: Repository<EstimateSetting>
  ) {}

  /**
   * Creatae Estimate
   * @param createEstimateSettingDto
   * @returns
   */
  async create(
    createEstimateSettingDto: CreateEstimateSettingDto
  ): Promise<any> {
    const getData: Object = await this.estimateRepo.create(
      createEstimateSettingDto
    );
    const saveData: Object = await this.estimateRepo.save(getData);
    if (!saveData) throw new NotFoundException("cannot save data.");
    return { data: saveData };
  }

  /**
   * Find All
   * @returns
   */
  async findAll(): Promise<any> {
    const findData: object = await this.estimateRepo.find();

    return { data: findData };
  }

  /**
   * FindOne
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<object> {
    const findData: object = await this.estimateRepo.findOne(id);
    return { data: findData };
  }

  /**
   * Update Data
   * @param id
   * @param updateEstimateSettingDto
   * @returns
   */
  async update(
    id: number,
    updateEstimateSettingDto: UpdateEstimateSettingDto
  ): Promise<any> {
    const getData: Object = await this.estimateRepo.findOne(id);
    if (!getData) throw new NotFoundException("Not found data");
    const findData: object = await this.estimateRepo.update(
      id,
      updateEstimateSettingDto
    );
    return { data: findData };
  }

  /**
   * Update Active
   * @param id
   * @param active
   * @returns
   */
  async updateActive(id: number, active: any): Promise<any> {
    const checkData = await this.estimateRepo.findOne(id);
    if (!checkData) throw new NotFoundException("Not found");
    const result = await this.estimateRepo.update(id, active);
    if (!result) throw new NotFoundException("cannot update");
    return { data: result };
  }

  /**
   * Remove
   * @param id
   * @returns
   */
  async remove(id: number): Promise<any> {
    const getData: Object = await this.estimateRepo.delete(id);
    return { data: getData };
  }
}
