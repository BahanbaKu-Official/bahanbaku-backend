const querystring = require('qs');
const bribniBankHandler = require("./bribniSimulateHandler");
const bcaBankHandler = require("./bcaSimulateHandler");
const permataBankHandler = require("./permataSimulateHandler");
const mandiriBankHandler = require("./mandiriSimulateHandler");
const gopaySimulateHandler = require("./gopaySimulateHandler");

const generateSimulateMidtransObj = (paymentMethod,va_number,biller_code,bill_key,gopayTransactionId,total) => {
  if (['bri','bni'].includes(paymentMethod)) {
    return bribniBankHandler(querystring, va_number, total);
  }

  if (paymentMethod == 'mandiri') {
    return mandiriBankHandler(querystring, biller_code, bill_key, total);
  }
  
  if (paymentMethod == 'permata') {
    return permataBankHandler(querystring, va_number, total);
  }

  if (paymentMethod == 'bca') {
    return bcaBankHandler(querystring, va_number, total);
  }

  if (paymentMethod == 'gopay') {
    return gopaySimulateHandler(gopayTransactionId);
  }
  
  return {
    error: 'payment method not listed'
  }
}

module.exports = {
  generateSimulateMidtransObj
};