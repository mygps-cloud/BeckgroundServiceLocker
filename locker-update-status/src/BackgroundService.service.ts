import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { LockerService } from './update/update.service';

@Injectable()
export class BackgroundService {
  constructor(private readonly updateService: LockerService) {}

  private readonly logger = new Logger(BackgroundService.name);


  @Interval(5000)
 async handleInterval() {
     await   this.updateService.updateLockerStatus();
   
  }

  // @Timeout(10000)
  // handleTimeout() {
    //await  this.updateService.updateLockerStatus();
  // }
}
