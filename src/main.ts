import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookie from 'cookie-parser';
import { errorFilter } from './common/errors/filter/filter.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.useGlobalFilters(new errorFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookie(config.get<string>('SIGNED_COOKIE')));
  await app.listen(3000);
}
bootstrap();
