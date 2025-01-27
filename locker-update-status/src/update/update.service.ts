import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locker } from './entity';

@Injectable()
export class LockerService {
  constructor(
    @InjectRepository(Locker)
    private readonly lockerRepository: Repository<Locker>,
  ) {}

  async updateLockerStatus(): Promise<void> {
   
    await this.lockerRepository.manager.query('SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED');

    
    const lockers = await this.lockerRepository.find({
      where: { connectionStatus: true },
    });

  
    if (lockers.length > 0) {
      await this.lockerRepository.update(
        { connectionStatus: true },  
        { connectionStatus: false }  
      );
      console.log('Lockers updated successfully.');
    } else {
      console.log('No lockers with connectionStatus = true were found.');
    }

  
    await this.lockerRepository.manager.query('COMMIT');
  }
}
