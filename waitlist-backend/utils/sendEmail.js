import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {

    console.log("Starting Email Process...");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },

      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // SMTP CHECK
    await transporter.verify();

    console.log("SMTP Connected Successfully");

    const info = await transporter.sendMail({
      from: `"Truvixoo" <${process.env.SMTP_USER}>`,
      to,
      subject: "🎉 You're on the Waitlist!",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          
          <h2>Hello ${name} 👋</h2>

          <p>
            Thank you for joining our waitlist 🎉
          </p>

          <p>
            We will notify you soon.
          </p>

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