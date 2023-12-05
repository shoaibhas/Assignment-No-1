import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "44bc67a9e8c9ac", // place your user
    pass: "f7fad792ff3968", // place user's password
  },
});

const LoginEmail = async (params) => {
  const { from, to, subject, text } = params;
  const info = await transporter.sendMail({
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: `<b>${text}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

export default LoginEmail;
// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "44bc67a9e8c9ac",
//       pass: "f7fad792ff3968"
//     }
//   });
