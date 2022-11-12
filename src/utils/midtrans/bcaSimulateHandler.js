const bcaHandler = (querystring, va_number, total) => {
  return querystring.stringify({
    'company_code': va_number.substring(0, 5),
    'customer_number': va_number.substring(5),
    'currency_code': "IDR",
    'total_amount': total.toFixed(2).toString(),
    'customer_name': 'x' // We can use any value except empty value    
  });
}

module.exports = bcaHandler;