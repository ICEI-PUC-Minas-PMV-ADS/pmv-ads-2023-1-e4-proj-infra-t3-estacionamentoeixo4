import { CACHE_MANAGER } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@src/prisma/prisma.service';
import { VeiculoController } from './veiculo.controller';
import { VeiculoService } from './veiculo.service';

describe('VeiculoController', () => {
  let controller: VeiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeiculoController],
      providers: [
        VeiculoService, 
        PrismaService,
        { provide: CACHE_MANAGER, useValue: {} },
      ],
      
    }).compile();

    controller = module.get<VeiculoController>(VeiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
