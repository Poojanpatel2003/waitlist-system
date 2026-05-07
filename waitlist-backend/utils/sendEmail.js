import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {

    console.log("Starting Email Process...");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",

      port: 465,

      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Transport Created");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to,

      subject: "🎉 You're on the Waitlist!",

      html: `
        <h2>Hello ${name} 👋</h2>
        <p>Thank you for joining our waitlist 🎉</p>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");
    console.log(info.response);

    return true;

  } catch (error) {

    console.log("FULL EMAIL ERROR:");
    console.log(error);

    return false;
  }
};

export default sendEmail;