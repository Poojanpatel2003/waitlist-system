import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP Connected Successfully");

    const info = await transporter.sendMail({
      from: `"Truvixoo" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🎉 You're on the Waitlist!",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
          
          <div style="max-width:500px; margin:auto; background:white; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
            
            <div style="background:linear-gradient(135deg,#4f46e5,#3b82f6); padding:20px; text-align:center;">
              <h2 style="color:white; margin:0;">
                Welcome 🚀
              </h2>
            </div>

            <div style="padding:25px;">
              <h3>Hello ${name},</h3>

              <p style="color:#555; line-height:1.6;">
                Thank you for joining our waitlist 🎉
              </p>

              <p style="color:#555; line-height:1.6;">
                We will notify you soon.
              </p>

              <br/>

              <p style="margin:0;">
                Best Regards,
              </p>

              <strong>Team Truvixoo</strong>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email Sent:", info.messageId);

  } catch (error) {
    console.log("EMAIL ERROR:");
    console.log(error);
  }
};

export default sendEmail;