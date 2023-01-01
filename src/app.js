const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const initModels = require("./models/initModels");
const usersRoutes = require("./routes/users.routes");
const tasksRoutes = require("./routes/tasks.routes");
const app = express();

app.use(cors());
app.use(express.json());

initModels();

db.authenticate()
    .then(() => console.log("Autenticacion exitosa"))
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => console.log("Sincronizacion exitosa"))
    .catch((error) => console.log(error));

app.use("/api/v1", usersRoutes);
app.use("/api/v1", tasksRoutes);

app.get("/", (req, res) => {
    console.log("Corriendo");
    res.json("Corriendo");
});

module.exports = app;