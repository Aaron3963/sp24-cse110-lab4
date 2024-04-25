// Q1
function discountPrices(prices, discount){
    const discounted = [];
    const length = prices.length;

    for (let i=0; i < length; i++){
        const discountedPrices = prices[i] * (1 - discount);
        discounted.push(discountedPrices);
    }

    // console.log(i);
    console.log('length', length)
    return discounted;
}

console.log(discountPrices([100,200,300],0.5))
