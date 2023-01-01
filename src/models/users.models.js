const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Users = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "firstname"
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "lastname"
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING
    }
});

module.exports = Users;