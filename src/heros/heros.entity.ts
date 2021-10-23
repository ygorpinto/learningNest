import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('heros')
export class HerosEntity {
    @PrimaryGeneratedColumn('uuid') 
    id: string;
    
    @Column('text') 
    name: string;
    
    @Column('int') 
    difficult: number;
}