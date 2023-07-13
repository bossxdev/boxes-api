import { Test, TestingModule } from "@nestjs/testing";
import { EstimateSettingController } from "./estimate-setting.controller";
import { EstimateSettingService } from "./estimate-setting.service";

describe("EstimateSettingController", () => {
  let controller: EstimateSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstimateSettingController],
      providers: [EstimateSettingService],
    }).compile();

    controller = module.get<EstimateSettingController>(
      EstimateSettingController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
