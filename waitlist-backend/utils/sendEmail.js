import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
        
        <div style="max-width:500px; margin:auto; background:white; border-radius:10px; padding:30px;">
          
          <h2>Hello ${name} 👋</h2>

          <p style="color:#555; line-height:1.6;">
            Thank you for joining our waitlist 🎉
          </p>

          <p style="color:#555; line-height:1.6;">
            We will notify you soon.
          </p>

          <br/>

          <strong>Team Truvixoo</strong>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Truvixoo" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🎉 You're on the Waitlist!",
      html: htmlTemplate,
    });

    console.log("Email Sent Successfully");

  } catch (error) {
    console.log("EMAIL ERROR:");
    console.log(error);
  }
};

export default sendEmail;