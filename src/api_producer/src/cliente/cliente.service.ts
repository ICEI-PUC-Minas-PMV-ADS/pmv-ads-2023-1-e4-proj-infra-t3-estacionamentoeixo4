import {
  BadRequestException,
  CACHE_MANAGER,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-client.dto';
import { PrismaService } from '@src/prisma/prisma.service';
import { Cliente } from '@prisma/client';
import { Cache } from 'cache-manager';

@Injectable()
export class ClienteService {
  constructor(
    private readonly clientRepository: PrismaService,
    @Inject(CACHE_MANAGER) private readonly clienteCache: Cache,
  ) {}

  /**
   * @function Create Cliente
   * @param createClienteDto
   * @returns Client Created
   */
  async create(createClienteDto: CreateClienteDto) {
    const isExistEmail = await this.clientRepository.cliente.findFirst({
      where: { email: createClienteDto.email },
    });

    if (isExistEmail) {
      throw new BadRequestException(
        `O Email ${createClienteDto.email} já está cadastrado. Por favor, tente recupere a senha!`,
      );
    }

    const clienteResult: Cliente = await this.clientRepository.cliente.create({
      data: createClienteDto,
    });

    if (!clienteResult) {
      throw new InternalServerErrorException(
        `Não foi possível criar o cliente `,
      );
    }

    //Guarda o cliente criado no banco para ser recuperado quando logar no cache
    await this.clienteCache.set(
      `user_crated_${clienteResult.id}`,
      clienteResult,
    );
    return clienteResult;
  }

  async findAll() {
    const clientesInCache: Cliente[] = await this.clienteCache.get(
      'clientes_cache',
    );

    if (clientesInCache) {
      return clientesInCache;
    }
    const clientesResultDB = await this.clientRepository.cliente.findMany();

    if (!clientesResultDB) throw new NotFoundException('Não existe clientes!');

    await this.clienteCache.set('clientes_cache', clientesResultDB);

    return clientesResultDB;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    const body = updateClienteDto;
    return `This action updates a #${id} ${body} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
