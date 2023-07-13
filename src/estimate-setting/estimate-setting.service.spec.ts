import { Test, TestingModule } from "@nestjs/testing";
import { EstimateSettingService } from "./estimate-setting.service";

describe("EstimateSettingService", () => {
  let service: EstimateSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstimateSettingService],
    }).compile();

    service = module.get<EstimateSettingService>(EstimateSettingService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
