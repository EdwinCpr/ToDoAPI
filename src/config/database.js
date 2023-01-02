const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
    username: process.env.USER || "postgres",
    database: process.env.NAME || "todoapi",
    port: process.env.DB_PORT || "5432",
    host: process.env.HOST || "localhost",
    password: process.env.DB_PASSWORD || "root",
    dialect: "postgres",
    logging: false
});

module.exports = db;