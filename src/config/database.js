const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    logging: false
});

module.exports = db;