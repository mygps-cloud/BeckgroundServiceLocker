import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BackgroundService } from './BackgroundService.service';
import { ScheduleModule } from '@nestjs/schedule';
import { LockerService } from './update/update.service';
import { Locker } from './update/entity';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root', 
      password: 'password', 
      database: 'test', 
      entities: [Locker],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([Locker]),
  ],
  controllers: [],
  providers: [BackgroundService, LockerService],
})
export class AppModule {}
