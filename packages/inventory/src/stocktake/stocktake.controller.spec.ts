import { createMock } from '@golevelup/ts-jest';
import { Test, TestingModule } from '@nestjs/testing';
import { Stocktake, StocktakeLine } from '@amm/types';
import { StocktakeController } from './stocktake.controller';
import { StocktakeService } from './stocktake.service';

describe('StocktakeController', () => {
  let controller: StocktakeController;
  const mockService = createMock<StocktakeService>();
  const mockLocation = 'TEST_LOCATION';
  const mockLines: StocktakeLine[] = [createMock<StocktakeLine>()];
  const mockStocktake: Stocktake = { location: mockLocation, lines: mockLines };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StocktakeController],
      providers: [
        {
          provide: StocktakeService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<StocktakeController>(StocktakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('when we get a stocktake by location', () => {
    beforeAll(() => {
      controller.findByLocation(mockLocation);
    });

    it('should call findByLocation on the service', () => {
      expect(mockService.findByLocation).toHaveBeenCalledWith(mockLocation);
    });
  });

  describe('when we get all stocktakes', () => {
    beforeAll(() => {
      controller.findAll();
    });

    it('should call findAll on the service', () => {
      expect(mockService.findAll).toBeCalled();
    });
  });

  describe('when we save a stocktake', () => {
    beforeAll(() => {
      controller.save(mockStocktake.location, mockStocktake.lines);
    });

    it('should call save on the service', () => {
      expect(mockService.save).toBeCalled();
    });
  });
});
