const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const nodemailer = require("nodemailer");
const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

app.post("/send", (req, res) => {
  const { email, name, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: process.env.PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: "Portfolio | " + subject + " | " + name,
    html: `
        <body style="font-family: Arial, sans-serif; background-color: #F4F4F4; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #FFFFFF; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333; text-align: center; padding: 20px;">Contact Form - Portfolio</h1>
                <div style="padding: 0 20px;">
                    <p style="color: #555555;">Dear Priyanshu,</p>
                    <p style="color: #555555;">You have received a new message from the contact form on your portfolio website:</p>

                    <hr style="border: 1px solid #E9E9E9; margin: 20px 0;">

                    <p style="color: #555555;"><strong>Name:</strong> ${name}</p>
                    <p style="color: #555555;"><strong>Email:</strong> ${email}</p>
                    <p style="color: #555555;"><strong>Subject:</strong> ${subject}</p>
                    <p style="color: #555555;"><strong>Message:</strong> ${message}</p>
                    <hr style="border: 1px solid #E9E9E9; margin: 20px 0;">
                    <p style="color: #555555;">Please respond to the sender promptly.</p>
                </div>
                <p style="color: #999999; text-align: center; padding: 20px 0;">This email was generated automatically. Do not reply to this message.</p>
            </div>
        </body>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email Sent Successfully");
    }
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Starting a server at port ${process.env.PORT}`);
});
