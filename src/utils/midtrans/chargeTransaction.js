const axios = require("axios")
const { sandboxApiUrl, requestHeader } = require("../../config/midtrans.config")

const chargeTransaction = async (midtransReq) => {
  const response = await axios.post(`${sandboxApiUrl}v2/charge`, midtransReq,{
    headers: requestHeader,
  });
  // console.log(response);
  return response.data;
}

module.exports = {
  chargeTransaction,
}