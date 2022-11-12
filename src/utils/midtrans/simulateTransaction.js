const axios = require("axios")
const {
  requestHeader,
  simulatorApiUrl
} = require("../../config/midtrans-simulator.config");

const simulateTransaction = async (paymentMethod, midtransReq) => {
  response = '';
  if( ['gopay'].includes(paymentMethod) ){
    response = await axios.get(`${simulatorApiUrl}gopay/partner/app/verifyPaymentPin?id=${midtransReq}&phoneNumber=&pin=654321`, {
      headers: requestHeader,
    });        
  }else if( ['mandiri'].includes(paymentMethod) ){
    response = await axios.post(`${simulatorApiUrl}${paymentMethod}/bill/payment`, midtransReq, {
      headers: requestHeader,
    });
  } else {
    response = await axios.post(`${simulatorApiUrl}${paymentMethod}/va/payment`, midtransReq, {
      headers: requestHeader,
    });   
  }
  return 'success'
}

module.exports = {
  simulateTransaction,
}