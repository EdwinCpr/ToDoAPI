const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const db = new Sequelize({
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_LOCALHOST,
    password: process.env.DB_PASSWORD,
    dialect: "postgres"
});

module.exports = db;