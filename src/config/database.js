const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const db = new Sequelize({
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.HOST,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    logging: false
});

module.exports = db;