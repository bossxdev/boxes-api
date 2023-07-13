import { UseMailer } from "src/utils/use-mailer";

export const PendingPaymentMail = async (emailDto) => {
  const setMessage: any = await {
    subject: "ยืนยันการสั่งซื้อ - digiboxs",
    message:
      "<b>ท่านได้ยืนยันการสั่งซื้อเรียบร้อยแล้ว</b><br>โปรดชำระเงิน<br/><br><br>ขอบคุณค่ะ<br/>",
    email: emailDto,
    //'inpangxm@gmail.com'
  };
  await UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};

export const ProcessingMail = async (emailDto) => {
  const setMessage: any = await {
    subject: "ยืนยันการชําระเงิน - digiboxs",
    message:
      "<b>ชําระเงินเรียบร้อยแล้ว</b><br>สินค้าของคุณจะถูกจัดส่งโปรดรอร้านค้าตอบกลับค่ะ<br/><br><br>ขอบคุณค่ะ<br/>",
    email: emailDto,
  };
  await UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};

export const FailedMail = async (emailDto) => {
  const setMessage: any = await {
    subject: "การชำระเงินล้มเหลวหรือถูกปฏิเสธ - digiboxs",
    message:
      "<b>สถานะการชำระเงินล้มเหลวหรือถูกปฏิเสธ (ยังไม่ได้ชำระเงิน)</b><br><br>ขอบคุณค่ะ<br/>",
    email: emailDto,
  };
  await UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};

export const RefundedMail = async (emailDto) => {
  const setMessage: any = await {
    subject: "คืนเงิน - digiboxs",
    message:
      "<b>คืนเงินโดยผู้ดูแลระบบ</b><br>ไม่ต้องดำเนินการใดๆ เพิ่มเติม<br>ขอบคุณค่ะ<br/>",
    email: emailDto,
  };
  await UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};

export const CompletedMail = async (emailDto) => {
  const setMessage: any = await {
    subject: "คำสั่งซื้อเสร็จสมบูรณ์ - digiboxs",
    message:
      "<b>คำสั่งซื้อเสร็จสมบูรณ์และสมบูรณ์ /b><br>ไม่ต้องดำเนินการใดๆ เพิ่มเติม<br>ขอบคุณค่ะ<br/>",
    email: emailDto,
  };
  await UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};

export const OnholdMail = async (emailDto) => {
  const setMessage: any = await {
    subject: "รอการยืนยัน - digiboxs",
    message:
      "<b>คำสั่งซื้อรอการยืนยัน /b><br>สต็อกลดลง แต่คุณต้องยืนยันการชำระเงิน<br>ขอบคุณค่ะ<br/>",
    email: emailDto,
  };
  await UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};

export const AuthenticationRequired = async (emailDto) => {
  const setMessage: any = await {
    subject: "ตรวจสอบความถูกต้องของธุรกรรม - digiboxs",
    message:
      "<b>คำสั่งซื้อรอการยืนยัน /b><br>กำลังรอการดำเนินการจากลูกค้าเพื่อตรวจสอบความถูกต้องของธุรกรรมและ/หรือข้อกำหนดให้สมบูรณ์<br>ขอบคุณค่ะ<br/>",
    email: emailDto,
  };
  await UseMailer(setMessage.subject, setMessage.message, setMessage.email);
};
