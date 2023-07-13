import { Test, TestingModule } from "@nestjs/testing";
import { DhlTrackingService } from "./dhl-tracking.service";

describe("DhlTrackingService", () => {
  let service: DhlTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DhlTrackingService],
    }).compile();

    service = module.get<DhlTrackingService>(DhlTrackingService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
