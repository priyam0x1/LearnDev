const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "example@gmail.com",
    pass: "yourapppassword",
  },
});

function sendMail(to, sub, msg) {
  transporter.sendMail(
    {
      to: to,
      subject: sub,
      html: msg,
    },
    (error, info) => {
      if (error) {
        console.log("ERROR:", error);
      } else {
        console.log("Email Sent:", info.response);
      }
    },
  );
}

let recipient = "Manimugdha";
let demosub = "Email Sent Testing";
let demomail = `<h4>Email Delivery Test</h4>

<p>Dear ${recipient},</p>

<p>
This is a test email sent through the javascript application
using Nodemailer.
</p>

<p>
This email is being sent to verify that the email delivery system
is configured and functioning correctly.
</p>

<p>Regards,<br>
LearnDev Development Team</p>`;

let demoemail = "upanashm@gmail.com";

sendMail(demoemail, demosub, demomail);
