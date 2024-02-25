function solve(firstNumber, secondNumber) {
    let sum = 0;
    let totalSum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        totalSum = totalSum + i;
        sum = sum + i + ' ';

    }
    console.log(sum);
    console.log(`Sum: ${totalSum}`);


}
solve(50, 60);