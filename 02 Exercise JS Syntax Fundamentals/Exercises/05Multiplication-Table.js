function multiplication(number) {
    let result = 0;
    let product = 0;
    for (let i = 1; i <= 10; i++) {
        product = i * number;
        result = (`${number} X ${i} = ${product}`);
        console.log(result);
    }

}
multiplication(5);