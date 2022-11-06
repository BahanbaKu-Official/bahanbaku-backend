const { recipientName } = require("../../config/midtrans.config");

const otherBankHandler = (bankName, orderId, total, itemDetails, customerData) => {
  return {
    "payment_type": "bank_transfer",
    "bank_transfer": {
      "bank": bankName,
      bank_name: {
        "recipient_name": recipientName
      }
    },
    "transaction_details": {
      "order_id": orderId,
      "gross_amount": total,
    },
    "item_details": itemDetails,
    "customer_details":customerData
  }
}

module.exports = otherBankHandler;