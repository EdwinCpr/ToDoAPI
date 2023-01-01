const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const recoverPasswordEmail = async (data) => {
    const { firstName, lastName, email, token } = data;
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });

    const info = await transport.sendMail({
        from: "Tasks - Guarda tus tareas de manera segura",
        to: `${email}`,
        subject: "Recuperar contraseña",
        text: "Has olvidado tu contraseña es hora de recuperarla",
        html: `
        <div style="text-align:center;background-color:#000;">
            <h1 style="color:#fff">ToDo</h1>
        </div>
        <p style="font-weight:bold">Hola ${firstName} ${lastName}, para recuperar tu reestablecer tu contraseña, presione <a href="http://localhost:9000/api/v1/users/recover-password/${token}">aqui</a></p>`
    });
};

module.exports = recoverPasswordEmail;