function calTotal(Price, Tax) {
    const Total = Price + Tax;
    return Total;
}

const finalPrice = calTotal(100, 15);

console.log(finalPrice);