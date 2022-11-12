const mandiriHandler = (querystring, biller_code, bill_key, total) => {
  return querystring.stringify({
    'biller_code': biller_code,
    'bill_key': bill_key,
    'paid_bills': "01",
    'payment_amount': parseInt(total).toString() // BRI / BNI use String Decimal value. "188000"
  });  
}

module.exports = mandiriHandler;