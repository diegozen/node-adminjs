import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IBlog } from '../../domain/IBlog';

@Entity()
export class Blog implements IBlog {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    body!: string;
}
