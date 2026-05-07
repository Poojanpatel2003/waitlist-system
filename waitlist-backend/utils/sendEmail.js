import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {

    console.log("Starting Email Process...");

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to,

      subject: "🎉 You're on the Waitlist!",

      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2>Hello ${name} 👋</h2>

          <p>Thank you for joining our waitlist 🎉</p>

          <p>We will notify you soon.</p>

          <br/>

          <strong>Team Truvixoo</strong>
        </div>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");
    console.log(info.response);

    return true;

  } catch (error) {

    console.log("EMAIL ERROR:");
    console.log(error.message);

    return false;
  }
};

export default sendEmail;