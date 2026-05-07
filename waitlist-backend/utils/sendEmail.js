import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT), // IMPORTANT
      secure: false,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // SMTP connection check
    await transporter.verify();
    console.log("SMTP Connected");

    const htmlTemplate = `
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
    `;

    const info = await transporter.sendMail({
      from: `"Truvixoo" <${process.env.SMTP_USER}>`,
      to,
      subject: "🎉 You're on the Waitlist!",
      html: htmlTemplate,
    });

    console.log("Email Sent Successfully");
    console.log(info);

  } catch (error) {
    console.log("EMAIL ERROR:", error.message);
  }
};

export default sendEmail;