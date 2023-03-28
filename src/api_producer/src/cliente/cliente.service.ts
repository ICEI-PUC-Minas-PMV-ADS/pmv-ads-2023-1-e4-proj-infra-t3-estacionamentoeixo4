import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-client.dto';
import ClienteEntity from './entities/cliente.entity';
import ClienteRepository from './repository/cliente.repository';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(ClienteEntity)
    private readonly clienteRepository: ClienteRepository
  ) { }
  create(createClienteDto: CreateClienteDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
