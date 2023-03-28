import UserEntity from '@src/cliente/entities/cliente.entity';
import { Repository } from 'typeorm';

export default class ClienteRepository extends Repository<UserEntity> { }