function solve(number) {
   let output;

   if (number >= 66) {
      output = 'elder';
   } else if (number >= 20) {
      output = 'adult';
   } else if (number >= 14) {
      output = 'teenager';
   } else if (number >= 3) {
      output = 'child';
   } else if (number >= 0) {
      output = 'baby';
   } else {
      output = 'out of bounds';
   }

   console.log(output);

}

solve(1);


