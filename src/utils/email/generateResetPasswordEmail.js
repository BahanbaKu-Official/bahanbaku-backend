const { gmailEmail} = require("../../config/email.config")

const vericationHandler = (recieverEmail, token) => {
    return {
        from: gmailEmail,  // sender address
        to: recieverEmail,   // list of receivers
        subject: 'BahanbaKu Reset Password Email',        
        html: `Your reset password token : ${token}`,
    };
  }
  
  module.exports = vericationHandler;