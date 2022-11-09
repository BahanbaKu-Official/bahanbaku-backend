const vaParser = (bankName, charge) => {
  if (bankName == 'permata') {
    return charge.permata_va_number;
  }
  
  if (['mandiri','gopay'].includes(bankName)) {
    return null;
  }

  return charge.va_numbers[0].va_number
}

module.exports = vaParser;