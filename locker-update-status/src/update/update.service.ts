

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { Locker } from './entity';
import { time } from 'console';



@Injectable()
export class LockerService {

  constructor(
    @InjectRepository(Locker)
    private readonly lockerRepository: Repository<Locker>,
  ) {}

  async updateLockerStatus(): Promise<void> {
    const queryRunner = this.lockerRepository.manager.connection.createQueryRunner();

    await queryRunner.connect(); 
    await queryRunner.startTransaction(); 

    try {
      
      await queryRunner.query('SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED');

   
      const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000); 
      const fourHoursLater = new Date(twoMinutesAgo.getTime() - 4 * 60 * 60 * 1000); 
      

      // console.log('Two Minutes Ago + 4 Hours:', fourHoursLater.toISOString());
      
 
      // const lockers = await this.lockerRepository.find({
      //   where: { ConnectionStatus: true },
      // });

      const lockers = await this.lockerRepository.find({
        where: {
          ConnectionStatus: true,
          LastConnectionTime: MoreThan(fourHoursLater), 
        },
      });
      console.log(lockers)
     
      if (lockers.length > 0) {
  
        await this.lockerRepository.update(
          { ConnectionStatus: true },
          { ConnectionStatus: false },
        );
        console.log('Lockers updated successfully.');
      } else {
        console.log('No lockers with connectionStatus = true were found.');
      }

     
      await queryRunner.commitTransaction();
    } catch (error) {
     
      await queryRunner.rollbackTransaction();
      console.error('Error updating locker status:', error);
    } finally {
     
      await queryRunner.release();
    }
  }
  
}
