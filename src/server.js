const app = require("./app");
const PORT = process.env.PORT;

require("dotenv").config();

const server = app.listen(PORT, () => {
    console.log(`App corriendo en el puerto ${PORT}`)
});

module.exports = server;