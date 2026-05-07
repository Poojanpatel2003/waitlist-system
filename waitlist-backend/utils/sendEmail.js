import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, name) => {
  try {

    console.log("Starting Resend Email Process...");

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",

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
    console.log(data);

    return true;

  } catch (error) {

    console.log("RESEND EMAIL ERROR:");
    console.log(error);

    return false;
  }
};

export default sendEmail;