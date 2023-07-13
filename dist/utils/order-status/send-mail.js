"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRequired = exports.OnholdMail = exports.CompletedMail = exports.RefundedMail = exports.FailedMail = exports.ProcessingMail = exports.PendingPaymentMail = void 0;
const use_mailer_1 = require("../use-mailer");
const PendingPaymentMail = async (emailDto) => {
    const setMessage = await {
        subject: "ยืนยันการสั่งซื้อ - digiboxs",
        message: "<b>ท่านได้ยืนยันการสั่งซื้อเรียบร้อยแล้ว</b><br>โปรดชำระเงิน<br/><br><br>ขอบคุณค่ะ<br/>",
        email: emailDto,
    };
    await use_mailer_1.UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};
exports.PendingPaymentMail = PendingPaymentMail;
const ProcessingMail = async (emailDto) => {
    const setMessage = await {
        subject: "ยืนยันการชําระเงิน - digiboxs",
        message: "<b>ชําระเงินเรียบร้อยแล้ว</b><br>สินค้าของคุณจะถูกจัดส่งโปรดรอร้านค้าตอบกลับค่ะ<br/><br><br>ขอบคุณค่ะ<br/>",
        email: emailDto,
    };
    await use_mailer_1.UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};
exports.ProcessingMail = ProcessingMail;
const FailedMail = async (emailDto) => {
    const setMessage = await {
        subject: "การชำระเงินล้มเหลวหรือถูกปฏิเสธ - digiboxs",
        message: "<b>สถานะการชำระเงินล้มเหลวหรือถูกปฏิเสธ (ยังไม่ได้ชำระเงิน)</b><br><br>ขอบคุณค่ะ<br/>",
        email: emailDto,
    };
    await use_mailer_1.UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};
exports.FailedMail = FailedMail;
const RefundedMail = async (emailDto) => {
    const setMessage = await {
        subject: "คืนเงิน - digiboxs",
        message: "<b>คืนเงินโดยผู้ดูแลระบบ</b><br>ไม่ต้องดำเนินการใดๆ เพิ่มเติม<br>ขอบคุณค่ะ<br/>",
        email: emailDto,
    };
    await use_mailer_1.UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};
exports.RefundedMail = RefundedMail;
const CompletedMail = async (emailDto) => {
    const setMessage = await {
        subject: "คำสั่งซื้อเสร็จสมบูรณ์ - digiboxs",
        message: "<b>คำสั่งซื้อเสร็จสมบูรณ์และสมบูรณ์ /b><br>ไม่ต้องดำเนินการใดๆ เพิ่มเติม<br>ขอบคุณค่ะ<br/>",
        email: emailDto,
    };
    await use_mailer_1.UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};
exports.CompletedMail = CompletedMail;
const OnholdMail = async (emailDto) => {
    const setMessage = await {
        subject: "รอการยืนยัน - digiboxs",
        message: "<b>คำสั่งซื้อรอการยืนยัน /b><br>สต็อกลดลง แต่คุณต้องยืนยันการชำระเงิน<br>ขอบคุณค่ะ<br/>",
        email: emailDto,
    };
    await use_mailer_1.UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};
exports.OnholdMail = OnholdMail;
const AuthenticationRequired = async (emailDto) => {
    const setMessage = await {
        subject: "ตรวจสอบความถูกต้องของธุรกรรม - digiboxs",
        message: "<b>คำสั่งซื้อรอการยืนยัน /b><br>กำลังรอการดำเนินการจากลูกค้าเพื่อตรวจสอบความถูกต้องของธุรกรรมและ/หรือข้อกำหนดให้สมบูรณ์<br>ขอบคุณค่ะ<br/>",
        email: emailDto,
    };
    await use_mailer_1.UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};
exports.AuthenticationRequired = AuthenticationRequired;
//# sourceMappingURL=send-mail.js.map