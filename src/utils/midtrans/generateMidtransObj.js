const gopayHandler = require("./gopayHandler");
const mandiriBankHandler = require("./mandiriBankHandler");
const otherBankHandler = require("./otherBankHandler");

const generateMidtransObj = (paymentMethod, transactionId, total, itemDetails, customerData) => {
  if (['permata','bri','bni','bca'].includes(paymentMethod)) {
    return otherBankHandler(paymentMethod, transactionId, total, itemDetails, customerData);
  }

  if (paymentMethod == 'mandiri') {
    return mandiriBankHandler(transactionId, total, itemDetails, customerData);
  }
  
  if (paymentMethod == 'gopay') {
    return gopayHandler(transactionId, total, itemDetails, customerData);
  }
  return {
    error: 'payment method not listed'
  }
}

module.exports = generateMidtransObj;