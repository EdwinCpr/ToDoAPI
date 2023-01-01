const Tasks = require("./tasks.models");
const Users = require("./users.models")

const initModels = () => {
    Users.hasMany(Tasks, { as: "Tasks", foreignKey: "user_id" });
    Tasks.belongsTo(Users, { as: "User", foreignKey: "user_id" });
};

module.exports = initModels;