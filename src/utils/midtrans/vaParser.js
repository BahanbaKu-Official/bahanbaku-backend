const vaParser = (bankName, charge) => {
  if (bankName == 'permata') {
    return charge.permata_va_number;
  }
  
  if (bankName == 'gopay') {
    return null;
  }

  return charge.va_numbers[0].va_number
}

module.exports = vaParser;