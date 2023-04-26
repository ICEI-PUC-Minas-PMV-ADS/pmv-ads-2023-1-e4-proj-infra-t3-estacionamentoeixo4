import { CACHE_MANAGER } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@src/prisma/prisma.service';
import { VeiculoService } from './veiculo.service';

describe('VeiculoService', () => {
  let service: VeiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VeiculoService, 
        PrismaService,
        { provide: CACHE_MANAGER, useValue: {} },
      ],
    }).compile();

    service = module.get<VeiculoService>(VeiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
