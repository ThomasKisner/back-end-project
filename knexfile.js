// Update with your config settings.
require('dotenv').config()
const localPg = {
  host: 'localhost',
  database: 'notes',
  user: process.env.DB_user,
  password: process.env.DB_Pass,
}
const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection:  dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
