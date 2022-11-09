const gopayHandler = require("./gopayHandler");
const mandiriBankHandler = require("./mandiriBankHandler");
const otherBankHandler = require("./otherBankHandler");

const generateMidtransObj = (paymentMethod, transactionId, total, itemDetails, customerDetails) => {
  if (['permata','bri','bni','bca'].includes(paymentMethod)) {
    return otherBankHandler(paymentMethod, transactionId, total, itemDetails, customerDetails);
  }

  if (paymentMethod == 'mandiri') {
    return mandiriBankHandler(transactionId, total, itemDetails, customerDetails);
  }
  
  if (paymentMethod == 'gopay') {
    return gopayHandler(transactionId, total, itemDetails, customerDetails);
  }
  return {
    error: 'payment method not listed'
  }
}

module.exports = generateMidtransObj;