function maxProfit(stockPrice) {
  let minValue = 0; //points to first arr ele
  let profit = 0;
  for (let i = 1; i < stockPrice.length; i++) {
    if (stockPrice[minValue] > stockPrice[i]) {
      minValue = i;
    } else if (stockPrice[i] - stockPrice[minValue] > profit) {
      profit = stockPrice[i] - stockPrice[minValue];
    }
  }
  return profit > 0 ? profit : 0;
}

const stockPrice = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(stockPrice);
console.log(profit);
