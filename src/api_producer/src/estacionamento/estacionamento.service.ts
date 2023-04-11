import {
  BadRequestException,
  CACHE_MANAGER,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@src/prisma/prisma.service';
import { Cache } from 'cache-manager';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { Estacionamento } from '@prisma/client';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';
import { EstacionamentoModule } from './estacionamento.module';

@Injectable()
export class EstacionamentoService {
  constructor(
    private readonly clientRepository: PrismaService,
  ) {}

  /**
   * @function Create Estacionamento
   * @param CreateEstacionamentoDto
   * @returns Estacionamento Created
   */
  async create(createEstacionamentoDto: CreateEstacionamentoDto): Promise<Estacionamento> {
    const alreadyExists: Estacionamento = await this.clientRepository.estacionamento.findFirst({
      where: { cnpj: createEstacionamentoDto.cnpj },
    });

    if (alreadyExists) {
      throw new BadRequestException(
        `O estacionamento ${createEstacionamentoDto.razao_social} já está cadastrado com o CNPJ: ${createEstacionamentoDto.cnpj}. Por favor, tente recuperar a senha!`,
      );
    }

    const createEstacionamento: Estacionamento = await this.clientRepository.estacionamento.create({
      data: createEstacionamentoDto,
    });

    if (!createEstacionamento) {
      throw new InternalServerErrorException(
        `Não foi possível criar o estacionamento.`,
      );
    }

    return createEstacionamento;
  }

  async findOne(id: number): Promise<Estacionamento> {
    const foundEstacionamento: Estacionamento = await this.clientRepository.estacionamento.findUnique({
      where: { id: id },
    })

    if(!foundEstacionamento) {
      throw new InternalServerErrorException(
        `Não foi possível encontrar o estacionamento. id: ${id}`,
      );
    }

    return foundEstacionamento
  }

  async updateOne(id: number, updateEstacionamentoDto: UpdateEstacionamentoDto): Promise<Estacionamento> {
    const updatedEstacionamento: Estacionamento = await this.clientRepository.estacionamento.update({
      where: { id: id },
      data: updateEstacionamentoDto
    })

    if(!updatedEstacionamento) {
      throw new InternalServerErrorException(
        `Não foi possível atualizar o estacionamento. id: ${id}`,
      );
    }

    return updatedEstacionamento
  }

  async removeOne(id: number): Promise<any> {
    const deletedEstacionamento: Estacionamento = await this.clientRepository.estacionamento.delete({
      where: { id: id }
    })

    if(!deletedEstacionamento) {
      throw new InternalServerErrorException(
        `Não foi possível deletar o estacionamento. id: ${id}`,
      );
    }

    return {
      id: id,
      message: `Estacionamento com o id: ${id} foi deletado com sucesso.`
    }
  }
}
