import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('locker') 
export class Locker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'boolean' })
  emergencyOpen: boolean;

  @Column({ type: 'varchar', length: 255 })
  conditionLocker: string;

  @Column({ type: 'boolean' })
  connectionStatus: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedDate: Date;

  @Column({ type: 'int' })
  lockerId: number;
}
