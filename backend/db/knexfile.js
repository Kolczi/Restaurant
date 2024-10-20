require('module-alias/register');
const config = require('@config');
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:     config.POSTGRES_HOST,
      database: config.POSTGRES_DB,
      user:     config.POSTGRES_USER,
      password: config.POSTGRES_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: config.KNEX_DEBUG
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: config.POSTGRES_DB,
      user:     config.POSTGRES_USER,
      password: config.POSTGRES_PASSWORD
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
    client: 'postgresql',
    connection: {
      database: config.POSTGRES_DB,
      user:     config.POSTGRES_USER,
      password: config.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
