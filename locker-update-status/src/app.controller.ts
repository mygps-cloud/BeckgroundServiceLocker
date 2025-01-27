import { Controller, Get } from '@nestjs/common';
import { BackgroundService } from './BackgroundService.service';

@Controller()
export class AppController {
  constructor(private readonly appService: BackgroundService) {}

  @Get()
  getHello(): string {
    return 
  }
}
