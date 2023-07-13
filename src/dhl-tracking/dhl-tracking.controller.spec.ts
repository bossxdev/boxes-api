import { Test, TestingModule } from "@nestjs/testing";
import { DhlTrackingController } from "./dhl-tracking.controller";
import { DhlTrackingService } from "./dhl-tracking.service";

describe("DhlTrackingController", () => {
  let controller: DhlTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DhlTrackingController],
      providers: [DhlTrackingService],
    }).compile();

    controller = module.get<DhlTrackingController>(DhlTrackingController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
