import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.verify();
    console.log("Transport Ready");

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
        
        <div style="max-width: 500px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          
          <div style="background: linear-gradient(135deg, #4f46e5, #3b82f6); padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">Welcome 🚀</h2>
          </div>

          <div style="padding: 25px;">
            <h3 style="margin-top: 0;">Hello ${name},</h3>
            
            <p style="color: #555; line-height: 1.5;">
              Thank you for joining our waitlist 🎉.
              We will notify you soon.
            </p>

            <p style="color: #555; line-height: 1.5;">
              We’re excited to have you on board.
            </p>

            <div style="margin-top: 30px;">
              <p style="margin: 0; color: #777;">
                Best Regards,
              </p>

              <p style="margin: 5px 0 0; font-weight: bold; color: #111;">
                Team Truvixoo
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Poojan Patel" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🎉 You're on the Waitlist!",
      html: htmlTemplate,
    });

    console.log("Email Sent Successfully");

  } catch (error) {
    console.error("Email Error:", error);
  }
};

export default sendEmail;