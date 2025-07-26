import { Test, TestingModule } from '@nestjs/testing';
import { AppController as AppController } from './app.controller';
import { AppService as AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World! <a href=/swagger-ui>swagger-ui</a>"', () => {
      expect(appController).toBeDefined();
    });
  });
});
