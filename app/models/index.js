const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const db = {};
try {
    const sequelize = new Sequelize(dbConfig.uri, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        ssl: {
            rejectUnauthorized: false
        },
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.user = require("./user.model.js")(sequelize, Sequelize);
} catch (error) {
    console.error(error);
}

module.exports = db;