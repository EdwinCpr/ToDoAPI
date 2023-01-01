const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Tasks = db.define("tasks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    }
});

module.exports = Tasks;