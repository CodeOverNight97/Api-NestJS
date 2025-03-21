import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Get('checkCalled')
  Check(): boolean {
    return this.appService.checkCalled();
  }

  @Post('someString')
  sayAny(word: string): string {
    return word;
  }
}
