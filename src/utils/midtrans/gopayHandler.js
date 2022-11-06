const gopayHandler = (orderId, total, itemDetails, customerData) => {
  return {
    "payment_type": "gopay",
    "transaction_details": {
      "order_id": orderId,
      "gross_amount": total,
    },
    "item_details": itemDetails,
    "customer_details":customerData,
  }
}

module.exports = gopayHandler;