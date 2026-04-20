var buySellStocks = function (prices) {
    let minValue = prices[0], maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i];
        }
        if (maxProfit < prices[i] - minValue) {
            maxProfit = prices[i] - minValue;
        }
    }
    return maxProfit;
};


console.log("Max Profit::::", buySellStocks([7, 1, 5, 3, 6, 4]));
console.log("Max Profit::::", buySellStocks([7, 6, 4, 3, 1]));



/** 
 * Leet Code : 121
 *  Approach :-> Keep Tarck of minValue of Stock and maxProfit we have seen so far till each element while iterating
 */