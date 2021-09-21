import { NestFactory } from '@nestjs/core';
import { createDbConnection } from './connection';
import * as bodyParser from 'body-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  await createDbConnection({
    host: '0.0.0.0',
    username: 'postgres',
    database: '',
    port: 5432,
    password: 'docker',
    schema: '',
    connectionName: 'default',
  });
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  await app.listen(3000, () => {
    console.log('listening on http://0.0.0.0:3000/graphql');
  });
}

bootstrap();
