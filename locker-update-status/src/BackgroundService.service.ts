import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class BackgroundService {
  private readonly logger = new Logger(BackgroundService.name);


  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    this.logger.log('Executing task every minute');
   
  }

  
  @Interval(5000)
  handleInterval() {
    this.logger.log('Executing task every 5 seconds');
   
  }

 
  @Timeout(10000)
  handleTimeout() {
    this.logger.log('Executing task after 10 seconds');
  
  }
}
