const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const Users = require("../models/users.models");

const chechAuth = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await Users.findByPk(decoded.id, {
                attributes: {
                    exclude: ["createdAt", "updatedAt", "token", "password"]
                }
            });
            return next();
        } catch (error) {
            console.log(error);
        };
    };

    if (!token) {
        const error = new Error("Token invalido");
        return res.status(400).json({ msg: error.message });
    };

    next();
};

module.exports = chechAuth;