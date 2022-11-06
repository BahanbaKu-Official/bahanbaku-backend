const { recipientName } = require("../../config/midtrans.config");

const mandiriBankHandler = (orderId, total, itemDetails, customerData) => {
  return {
    "payment_type": "echannel",
    "transaction_details": {
      "order_id": orderId,
      "gross_amount": total,
    },
    "item_details": itemDetails,
    "customer_details":customerData,
    "echannel":{
      "bill_info1":"Recipient:",
      "bill_info2": recipientName,
    }
  }
}

module.exports = mandiriBankHandler;