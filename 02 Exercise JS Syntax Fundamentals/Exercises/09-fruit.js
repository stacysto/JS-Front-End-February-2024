function solve(fruit, weight, price){
    let kilograms = (weight / 1000).toFixed(2);
    let totalPrice = (kilograms * price).toFixed(2);
let result=(`I need $${totalPrice} to buy ${kilograms} kilograms ${fruit}.`);
console.log(result);
}
solve('apple', 1563, 2.35);