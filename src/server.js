const app = require("./app");
const dotenv = require("dotenv");
const PORT = process.env.PORT;

dotenv.config();

app.listen(PORT);