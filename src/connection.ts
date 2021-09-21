import { Connection, createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { UserModel } from './models';

export function createDbConnection({
  host,
  username,
  password,
  schema,
  database,
  port,
  connectionName = 'default',
}: {
  host: string;
  username: string;
  password: string;
  schema: string;
  database: string;
  port: number;
  connectionName: string;
}): Promise<Connection> {
  const options: PostgresConnectionOptions = {
    name: connectionName,
    host,
    username,
    password,
    schema,
    database,
    port,
    type: 'postgres',
    entities: [UserModel.User],
  };
  return createConnection(options);
}
