import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {

    console.log("Starting Email Process...");

    const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",

  port: 465,

  secure: true,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  tls: {
    rejectUnauthorized: false,
  },
});

    // SEND EMAIL
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