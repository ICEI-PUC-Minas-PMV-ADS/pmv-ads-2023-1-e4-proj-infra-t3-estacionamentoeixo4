import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity('cliente')
export default class ClienteEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'nome', type: 'varchar', length: 50 })
    name: string;

    @Column({ name: 'email', type: 'varchar', unique: true, length: 50 })
    email: string;

    @Column({ name: 'cpf', type: 'char', unique: true, length: 11 })
    cpf: string
}
