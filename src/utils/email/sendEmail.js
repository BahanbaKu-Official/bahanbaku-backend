const nodemailer = require('nodemailer');
const { gmailPort, gmailHost, gmailEmail, gmailPass } = require("../../config/email.config")

const sendEmail = async (mailData) => {
    const transporter = nodemailer.createTransport({
        port: gmailPort,               // true for 465, false for other ports
        host: gmailHost,
           auth: {
                user: gmailEmail,
                pass: gmailPass,
             },
        secure: true,
    });

    const response = await transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });
  
  return response;
}

module.exports = sendEmail;