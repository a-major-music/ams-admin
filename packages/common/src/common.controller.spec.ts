import { Test, TestingModule } from "@nestjs/testing";
import { CommonController } from "./common.controller";

describe("CommonController", () => {
  let controller: CommonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommonController],
    }).compile();

    controller = app.get<CommonController>(CommonController);
  });

  describe("root", () => {
    it('should return "Hello World! <a href=/swagger-ui>swagger-ui</a>"', () => {
      expect(controller).toBeDefined();
    });
  });
});
