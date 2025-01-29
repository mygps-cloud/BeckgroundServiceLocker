import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';import { BackgroundService } from './BackgroundService.service';
import { ScheduleModule } from '@nestjs/schedule';
import { LockerService } from './update/update.service';
import { Locker } from './update/entity';
dotenv.config();
@Module({
  imports: [
    ScheduleModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.HOST,
      port: Number(process.env.DbPort), 
      username: process.env.Username,
      password: process.env.Password,
      database: process.env.Database,
      entities: [Locker],
      synchronize: false, 
      options: {
        trustServerCertificate: true, 
      },
    }),
    TypeOrmModule.forFeature([Locker]),
    

  ],
  controllers: [],
  providers: [BackgroundService, LockerService],
})
export class AppModule {}