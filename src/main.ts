import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


async function bootstrap() {

  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');

  app.enableCors({origin: ["http://127.0.0.1:5174",'http://localhost:5174/',"https://vitfit-v2.netlify.app","https://vitfitcoaching.com","http://localhost:5174"]});

  await app.listen(8080);
}
bootstrap();
