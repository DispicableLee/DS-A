const p = [4,2,6,8,3,9,10,2,4]



const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit
      console.log(profit)

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }

  return max_profit;
};

console.log(maxProfit(p))