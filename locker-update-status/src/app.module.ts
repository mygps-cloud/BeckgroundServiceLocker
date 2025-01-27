import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BackgroundService } from './BackgroundService.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(), 
  ],
  controllers: [AppController],
  providers: [BackgroundService],
})
export class AppModule {}
