import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  console.log("EMAIL FUNCTION STARTED");

  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "EXISTS" : "MISSING");

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("TRANSPORT CREATED");

    await transporter.verify();

    console.log("SMTP VERIFIED");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: "Test Email",
      text: `Hello ${name}`,
    });

    console.log("EMAIL SENT");
    console.log(info);

  } catch (error) {
    console.log("FULL EMAIL ERROR BELOW");
    console.log(error);
  }
};

export default sendEmail;