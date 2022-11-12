const permataHandler = (querystring, va_number, total) => {
  return querystring.stringify({
    'va_number': va_number,
    'amount': total.toFixed(2).toString() // Permata use String Decimal value. "188000.00"
  });  
}

module.exports = permataHandler;