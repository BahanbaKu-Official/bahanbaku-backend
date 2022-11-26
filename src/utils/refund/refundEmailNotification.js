const { gmailEmail} = require("../../config/email.config");

const vericationHandler = (user,transaction,refund) => {
    const listReciever = ['rifqi977@gmail.com','rigelvibi51@gmail.com'];

    return {
        from: gmailEmail,  // sender address
        to: listReciever,   // list of receivers
        subject: 'New refund request',        
        html: `New refund request created at ${refund.createdAt} from user : (Id :${user.userId}, Email: ${user.email}). </br>Transaction Data : Id = ${transaction.transactionId} , amount = ${transaction.total} , status = ${transaction.status}. </br>Bank Data : bankOwner = ${refund.bankOwner} , bank = ${refund.bankName} , bankAccount = ${refund.bankAccount}`
    }
}

module.exports = vericationHandler;