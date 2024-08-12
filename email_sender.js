import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kelechizobam82@gmail.com",
    pass: "kpri xljf pnhh zena",
  },
});

var mailOptions = {
  from: process.env.EMAL,
  to: "Kelechichizobam571@gmail.com",
  subject: "Sending Email using Node.js checkpoint",
  text: "Abeg work",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
