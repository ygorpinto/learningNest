import { config } from 'dotenv'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

config();
const port = process.env.PORT || 8000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server is running at http://localhost:${port}`, 'Bootstrap')
}
bootstrap();
