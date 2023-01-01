const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
    username: process.env.USER,
    database: process.env.NAME,
    port: process.env.DB_PORT,
    host: process.env.HOST,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    logging: false
});

module.exports = db;