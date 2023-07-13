"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseMailer = void 0;
const nodemailer = require("nodemailer");
const UseMailer = async (subject, message, email) => {
    const transporter = await nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASSWORD_EMAIL,
        },
    });
    const mailOptions = await {
        from: process.env.USER_EMAIL,
        to: email,
        subject: subject,
        html: message,
    };
    await transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err);
        else
            console.log(info);
    });
};
exports.UseMailer = UseMailer;
//# sourceMappingURL=use-mailer.js.map