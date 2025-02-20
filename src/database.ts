import knex, { Knex } from 'knex'
import { env } from './env'

export const configKnex: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const setupKnex = knex(configKnex)
