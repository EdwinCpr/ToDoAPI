const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "350d",
    });
};

module.exports = generateJWT;