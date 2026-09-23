function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) {
    return 0;
  }
  
  let fee = daysLate * ratePerDay;
  if (fee > 20) {
    fee = 20;
  }
  
  return Math.round(fee);
}
  
  return Math.round(fee);
}

}

module.exports = { isValidLoan, calculateLateFee };
