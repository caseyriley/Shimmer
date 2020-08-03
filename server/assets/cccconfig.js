// module.exports = {
//     environment: process.env.NODE_ENV || 'development',
//     port: process.env.PORT || 8080,
// };

const config = require('./');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
    development: {
        username: 'glim',
        password,
        database: 'gimmer',
        host,
        dialect: 'postgres',
        seederStorage: 'sequelize',
    },
    test: {
        dialect: "sqlite",
        DB_CONN: "sqlite.memory",
        logging: false,
        seederStorage: 'sequelize',
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        seederStorage: 'sequelize',
    },
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
};