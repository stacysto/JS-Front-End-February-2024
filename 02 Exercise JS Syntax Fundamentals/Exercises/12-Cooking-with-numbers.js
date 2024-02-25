function solve(number, operator1, operator2, operator3, operator4, operator5) {
    let output;

    switch (operator1) {
        case 'chop': output = number / 2;
            number = output;
            console.log(output);
            break;
        case 'dice': output = Math.sqrt(number);
            number = output;
            console.log(output);
            break;
        case 'spice': output = number + 1;
            number = output;
            console.log(output);
            break;
        case 'bake': output = number * 3;
            number = output;
            console.log(output);
            break;
        case 'fillet': output = (number * 0.8).toFixed(2);
            number = output;
            console.log(output);
            break;


    }
    switch (operator2) {
        case 'chop': output = number / 2;
            number = output;
            console.log(output);
            break;
        case 'dice': output = Math.sqrt(number);
            number = output;
            console.log(output);
            break;
        case 'spice': output = number + 1;
            number = output;
            console.log(output);
            break;
        case 'bake': output = number * 3;
            number = output;
            console.log(output);
            break;
        case 'fillet': output = (number * 0.8).toFixed(2);
            number = output;
            console.log(output);
            break;


    }
    switch (operator3){
        case 'chop': output = number / 2;
            number = output;
            console.log(output);
            break;
        case 'dice': output = Math.sqrt(number);
            number = output;
            console.log(output);
            break;
        case 'spice': output = number + 1;
            number = output;
            console.log(output);
            break;
        case 'bake': output = number * 3;
            number = output;
            console.log(output);
            break;
        case 'fillet': output = (number * 0.8).toFixed(2);
            number = output;
            console.log(output);
            break;


    }
    switch (operator4) {
        case 'chop': output = number / 2;
            number = output;
            console.log(output);
            break;
        case 'dice': output = Math.sqrt(number);
            number = output;
            console.log(output);
            break;
        case 'spice': output = number + 1;
            number = output;
            console.log(output);
            break;
        case 'bake': output = number * 3;
            number = output;
            console.log(output);
            break;
        case 'fillet': output = (number * 0.8).toFixed(2);
            number = output;
            console.log(output);
            break;


    }
    switch (operator5) {
        case 'chop': output = number / 2;
            number = output;
            console.log(output);
            break;
        case 'dice': output = Math.sqrt(number);
            number = output;
            console.log(output);
            break;
        case 'spice': output = number + 1;
            number = output;
            console.log(output);
            break;
        case 'bake': output = number * 3;
            number = output;
            console.log(output);
            break;
        case 'fillet': output = (number * 0.8).toFixed(2);
            number = output;
            console.log(output);
            break;


    }

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
