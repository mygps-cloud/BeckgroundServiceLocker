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
      type: 'mssql',
      host: '85.117.37.115',
      port: 1433, 
      username: 'MysticWave88',
      password: 'Moonlit*Drive12',
      database: 'MyKeyBox_New',
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
