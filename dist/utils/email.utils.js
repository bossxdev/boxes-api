"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jakkrit.prasert26@gmail.com",
        pass: "jj053441736",
    },
});
const mailOptions = {
    from: "jakkrit.prasert26@gmail.com",
    to: "",
    subject: "",
    html: "",
};
const sendMail = async (to, subject, htmlBody) => {
    mailOptions.subject = subject;
    mailOptions.to = to;
    mailOptions.html = htmlBody;
    const info = await transporter.sendMail(mailOptions);
    if (info.response.indexOf("OK"))
        return true;
    else
        return false;
};
exports.sendMail = sendMail;
//# sourceMappingURL=email.utils.js.map