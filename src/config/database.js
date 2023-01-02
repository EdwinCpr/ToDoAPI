const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
    username: process.env.DB_USER || "postgres",
    database: process.env.DB_NAME || "todoapi",
    port: process.env.DB_PORT || "5432",
    host: process.env.DB_HOST || "localhost",
    password: process.env.DB_PASSWORD || "root",
    dialect: "postgres",
    logging: false
});

module.exports = db;