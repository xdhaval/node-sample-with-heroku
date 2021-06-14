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
    db.users = require("./user.model.js")(sequelize, Sequelize);
    db.employees = require("./employee.model.js")(sequelize, Sequelize);

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    /** Associate The Relation */
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

} catch (error) {
    console.error(error);
}

module.exports = db;