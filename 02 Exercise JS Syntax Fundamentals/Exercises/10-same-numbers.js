function solve(number){
    let firstDigit = number%10;
    let sum = 0;
    let sameDigits = true;
    while(number){ 
        sum = sum+number%10;
        if (number%10!==firstDigit) {
            sameDigits = false;
        }
        number = Math.floor(number/10);
    }
    
console.log(sameDigits);
console.log(sum);
}

solve(3222222);
// console.log(solve(1234));
// const solve = require('./your_file_containing_solve_function');

// describe('solve function', () => {
//   test('should return correct result for input with same digits', () => {
//     expect(solve(111)).toEqual({ sameDigits: true, sum: 3 });
//   });

//   test('should return correct result for input with different digits', () => {
//     expect(solve(123)).toEqual({ sameDigits: false, sum: 6 });
//   });

//   test('should return correct result for input with a single digit', () => {
//     expect(solve(5)).toEqual({ sameDigits: true, sum: 5 });
//   });
// });