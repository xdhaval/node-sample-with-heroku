const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const db = {};
try {
    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        ssl: {
            rejectUnauthorized: true
        },
        dialectOptions: {
            ssl: true
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