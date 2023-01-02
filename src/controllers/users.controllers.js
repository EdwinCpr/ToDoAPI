const Users = require("../models/users.models");
const bcrypt = require("bcrypt");
const generateJWT = require("../helpers/generateJWT");
const generateID = require("../helpers/generateID");
const recoverPasswordEmail = require("../helpers/sendEmail");

const create = async (req, res) => {
    const newUser = req.body;
    const { email, password } = req.body;

    const hash = bcrypt.hashSync(password, 9);
    newUser.password = hash;
    const searchEmail = await Users.findOne({ where: { email } });

    if (searchEmail) {
        const error = new Error("Este email ya se encuentra registrado");
        return res.status(400).json({ msg: error.message });
    };

    try {
        const user = await Users.create(newUser);
        res.status(201).json({ msg: "Registro exitoso" });
    } catch (error) {
        console.log(error);
    };
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });

    if (!user) {
        const error = new Error("Este usuario no existe");
        return res.status(400).json({ msg: error.message });
    };

    const comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
        const error = new Error("Contraseña incorrecta");
        return res.status(400).json({ msg: error.message });
    };

    try {
        res.json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateJWT(user.id)
        });
    } catch (error) {
        console.log(error);
    };
};

const recoverPassword = async (req, res) => {
    const { email } = req.body;
    const user = await Users.findOne({ where: { email } });

    if(!user) {
        const error = new Error("No se encontro usuario con este email");
        return res.status(400).json({ msg: error.message });
    };

    const { id, firstName, lastName, password } = user;

    try {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            token: generateID()
        };
        await Users.update(data, { where: { id } });
        recoverPasswordEmail(data);
        res.json({ msg: "Correo enviado, porfavor verifique" });
    } catch (error) {
        console.log(error);
    };
};

const changePassword = async (req, res) => {
    const { token } = req.params;
    const user = await Users.findOne({ where: { token } });

    if(!user) {
        const error = new Error("Token invalido");
        return res.status(400).json({ msg: error.message });
    };

    const { id, firstName, lastName, email } = user;
    const { password } = req.body;
    const hash = bcrypt.hashSync(password, 10);

    try {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash,
            token: ""
        };
        await Users.update(data, { where: { id } });
        res.json({ msg: "Cambiada con exito" });
    } catch (error) {
        console.log(error);  
    };
};

module.exports = {
    create,
    login,
    recoverPassword,
    changePassword
};