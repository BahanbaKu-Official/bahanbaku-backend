const bribniHandler = (querystring, va_number, total) => {
  return querystring.stringify({
    'va_number': va_number,
    'total_amount': total.toString() // BRI / BNI use String Decimal value. "188000"
  });  
}

module.exports = bribniHandler;