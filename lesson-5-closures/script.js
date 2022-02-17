var bills = {
  johnBills: [124, 48, 268, 180, 42],
  markBills: [77, 375, 110, 45],
  johnTips: [],
  markTips: [],
  johnFinalPaid: [],
  markFinalPaid: [],
  tipCalculate: function() {
    for (i = 0; i < this.johnBills.length; i++) {
      var value = this.johnBills[i];
      if (value < 50) {
        tip = value * (20/100);
      } else if (value > 50 && value < 200) {
        tip = value * (15/100);
      } else {
        tip = value * (10/100);
      }
      full = value + tip;
      this.johnTips.push(tip);
      this.johnFinalPaid.push(full);
    }
    for (i = 0; i < this.markBills.length; i++) {
      var value = this.markBills[i];
      if (value < 100) {
        tip = value * (20/100);
      } else if (value > 100 && value < 300) {
        tip = value * (10/100);
      } else {
        tip = value * (25/100);
      }
      full = value + tip;
      this.markTips.push(tip);
      this.markFinalPaid.push(full);
    }
  }
};
  
bills.tipCalculate();

function calcAverage(arr) {
  var calc = 0;
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    calc = calc + val;
  }
  var result = calc / arr.length;
  return result;
}

bills.johnAverageTip = calcAverage(bills.johnTips);
bills.markAverageTip = calcAverage(bills.markTips);

if (bills.johnAverageTip > bills.markAverageTip) {
  console.log("John's family paid the highest tips" + " " + "$" + bills.johnAverageTip);
} else if (bills.johnAverageTip < bills.markAverageTip) {
  console.log("Mark's family paid the highest tips" + " " + "$" + bills.markAverageTip);
} else {
  console.log("Families paid the same amount of tips" + " " + "$" + bills.markAverageTip);
}