import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


async function bootstrap() {

  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');

  app.enableCors({origin: ["https://myhealthleadership.netlify.app","http://127.0.0.1:5503",'http://localhost:5173',"https://myhealthleadership.com"]});

  await app.listen(8080);
}
bootstrap();
