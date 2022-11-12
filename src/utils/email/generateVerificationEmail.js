const { gmailEmail} = require("../../config/email.config")

const vericationHandler = (recieverEmail, token) => {
    return {
        from: gmailEmail,  // sender address
        to: recieverEmail,   // list of receivers
        subject: 'BahanbaKu Verification Email',        
        html: `<p>To verify your account please go to <a href="https://api.bahanbaku.app/verify?token=${token}"> this link </a></p>`,
    };
  }
  
  module.exports = vericationHandler;