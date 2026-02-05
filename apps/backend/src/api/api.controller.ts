import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class ApiController {
  @Get('')
  async healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
