import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, name) => {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",

      to,

      subject: "🎉 You're on the Waitlist!",

      html: `
  <div style="
    background:#f4f7fb;
    padding:40px 20px;
    font-family:Arial,sans-serif;
  ">

    <div style="
      max-width:600px;
      margin:auto;
      background:white;
      border-radius:20px;
      overflow:hidden;
      box-shadow:0 10px 30px rgba(0,0,0,0.08);
    ">

      <div style="
        background:linear-gradient(135deg,#4f46e5,#2563eb);
        padding:35px;
        text-align:center;
        color:white;
      ">

        <h1 style="
          margin:0;
          font-size:32px;
        ">
          Welcome to Truvixoo 🚀
        </h1>

        <p style="
          margin-top:10px;
          font-size:16px;
          opacity:0.9;
        ">
          You're officially on our waitlist
        </p>

      </div>

      <div style="padding:40px 30px; color:#333;">

        <h2 style="
          margin-top:0;
          font-size:24px;
        ">
          Hello ${name} 👋
        </h2>

        <p style="
          font-size:16px;
          line-height:1.7;
          color:#555;
        ">
          Thank you for joining the <strong>Truvixoo Waitlist</strong>.
          We’re excited to have you with us 🎉
        </p>

        <p style="
          font-size:16px;
          line-height:1.7;
          color:#555;
        ">
          We’ll notify you as soon as we launch and share exciting updates with you.
        </p>

        <div style="
          margin:35px 0;
          text-align:center;
        ">

          <a href="#"
            style="
              background:#2563eb;
              color:white;
              text-decoration:none;
              padding:14px 28px;
              border-radius:10px;
              display:inline-block;
              font-weight:bold;
              font-size:15px;
            ">
            Stay Tuned
          </a>

        </div>

        <hr style="
          border:none;
          border-top:1px solid #eee;
          margin:30px 0;
        ">

        <p style="
          color:#888;
          font-size:14px;
          text-align:center;
          margin-bottom:0;
        ">
          © 2026 Truvixoo. All rights reserved.
        </p>

      </div>
    </div>
  </div>
`
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