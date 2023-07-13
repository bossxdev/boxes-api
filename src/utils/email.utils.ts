const nodemailer: any = require("nodemailer");

// config สำหรับของ gmail
/**
 * Send Mail
 */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // ข้อมูลการเข้าสู่ระบบ
    user: "jakkrit.prasert26@gmail.com", // your email
    pass: "jj053441736", // your email password
  },
});

const mailOptions = {
  from: "jakkrit.prasert26@gmail.com", // sender
  to: "", // list of receivers
  subject: "", // Mail subject
  html: "", // HTML body
};

export const sendMail: any = async (to, subject, htmlBody) => {
  mailOptions.subject = subject;
  mailOptions.to = to;
  mailOptions.html = htmlBody;

  const info = await transporter.sendMail(mailOptions);
  if (info.response.indexOf("OK")) return true;
  else return false;
};
