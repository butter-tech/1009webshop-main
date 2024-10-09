import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.setViewEngine('ejs'); // Beállítja az EJS nézetmotort
  app.setBaseViewsDir('views'); // Beállítja a nézetek könyvtárát

  await app.listen(3000);
}
bootstrap();
