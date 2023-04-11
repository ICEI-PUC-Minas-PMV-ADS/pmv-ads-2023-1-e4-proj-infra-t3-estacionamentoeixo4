import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateManagerDto } from '../dto/create-manager.dto';
import { UpdateManagerDto } from '../dto/update-manager.dto';
import { Administrador } from '@prisma/client';

@Injectable()
export class ManagerService {
  constructor(private readonly managerRepository: PrismaService) {}

  async create(CreateManagerDto: CreateManagerDto) {
    const { nome, email, id_estacionamento } = CreateManagerDto;

    if (!this.verifyEmail(email)) {
      throw new ConflictException(
        `Administrador com o email '${email}' já está em uso.`,
      );
    }

    const administrador: Administrador =
      await this.managerRepository.administrador.create({
        data: {
          nome,
          email,
          id_estacionamento,
        },
      });

    return administrador;
  }

  async getAll() {
    try {
      const managers = await this.managerRepository.administrador.findMany();
      return managers;
    } catch (error) {
      throw new InternalServerErrorException(
        'Não foi possível buscar os administradores.',
        error,
      );
    }
  }

  async findById(id: number) {
    const manager: Administrador =
      await this.managerRepository.administrador.findUnique({
        where: { id },
      });

    if (!manager) {
      throw new NotFoundException(`Administrador com ID ${id} não encontrado.`);
    }

    return manager;
  }

  async update(id: number, updateManagerDto: UpdateManagerDto) {
    const { nome, email, id_estacionamento } = updateManagerDto;

    const existingManager =
      await this.managerRepository.administrador.findUnique({
        where: { id },
      });

    if (!existingManager) {
      throw new NotFoundException(
        `Administrador com o ID '${id}' não encontrado.`,
      );
    }

    if (!this.verifyEmail(email)) {
      throw new ConflictException(
        `Administrador com o email '${email}' já está em uso.`,
      );
    }

    const updatedManager: Administrador =
      await this.managerRepository.administrador.update({
        where: { id },
        data: {
          nome,
          email,
          id_estacionamento,
        },
      });

    return updatedManager;
  }

  async remove(id: number) {
    const existingManager: Administrador =
      await this.managerRepository.administrador.findUnique({
        where: { id },
      });

    if (!existingManager) {
      throw new NotFoundException(
        `Administrador com o ID '${id}' não encontrado.`,
      );
    }

    const deletedManager = await this.managerRepository.administrador.delete({
      where: { id },
    });

    return deletedManager;
  }

  async verifyEmail(email: string): Promise<boolean> {
    const existingManager: Administrador =
      await this.managerRepository.administrador.findUnique({
        where: { email },
      });

    return existingManager == null;
  }
}
