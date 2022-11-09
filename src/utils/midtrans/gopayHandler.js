const gopayHandler = (orderId, total, itemDetails, customerDetails) => {
  return {
    "payment_type": "gopay",
    "transaction_details": {
      "order_id": orderId,
      "gross_amount": total,
    },
    "item_details": itemDetails,
    "customer_details":customerDetails,
  }
}

module.exports = gopayHandler;