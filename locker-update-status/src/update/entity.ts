import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity({ schema: 'dealership-module', name: 'Box' })
export class Locker {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ type: 'varchar', length: 255 })
    Name: string;

    @Column({ type: 'bit', default: 0 })
    EmergencyOpen: boolean;

    @Column({ type: 'varchar', length: 255 })
    Condition: string;

    @Column({ type: 'bit', default: 0 })
    ConnectionStatus: boolean;

    @CreateDateColumn({ type: 'datetime' })
    CreatedDate: Date;

    @UpdateDateColumn({ type: 'datetime', nullable: true })
    LastConnectionTime?: Date;
    
    @Column({ type: 'int' })
    LockerId: number;
}
