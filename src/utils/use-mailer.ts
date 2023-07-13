const nodemailer = require("nodemailer");
// import nodemailer from 'nodemailer'

export const UseMailer = async (subject, message, email) => {
  const transporter: any = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const mailOptions: any = await {
    from: process.env.USER_EMAIL,
    to: email,
    subject: subject,
    html: message,
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
};
