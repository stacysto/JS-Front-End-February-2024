
function solve(numberOfPeople, typeOfGroup, day) {
    let totalPrice;
    let price;
    if (typeOfGroup === 'Students' && day === 'Friday') {
        price = 8.45;
        // totalPrice = (numberOfPeople * price);
    } else if (typeOfGroup === 'Business' && day === 'Friday') {
        price = 10.90;
        // totalPrice = numberOfPeople * price;
    } else if (typeOfGroup === 'Regular' && day === 'Friday') {
        price = 15;
        // totalPrice = numberOfPeople * price;
    } else if (typeOfGroup === 'Students' && day === 'Saturday') {
        price = 9.80;
        // totalPrice = numberOfPeople * price;
    } else if (typeOfGroup === 'Business' && day === 'Saturday') {
        price = 15.60;
        // totalPrice = numberOfPeople * price;
    } else if (typeOfGroup === 'Regular' && day === 'Saturday') {
        price = 20;
        // totalPrice = numberOfPeople * price;
    } else if (typeOfGroup === 'Students' && day === 'Sunday') {
        price = 10.46;
        // totalPrice = numberOfPeople * price;
    } else if (typeOfGroup === 'Business' && day === 'Sunday') {
        price = 16;
        // totalPrice = numberOfPeople * price;
    } else if (typeOfGroup === 'Regular' && day === 'Sunday') {
        price = 22.50;
        // totalPrice = numberOfPeople * price;
    }
    totalPrice = (numberOfPeople * price);
    if (typeOfGroup === 'Students' && numberOfPeople >= 30) {
        totalPrice = (totalPrice * 0.85);
    }
    if (typeOfGroup === 'Business' && numberOfPeople >= 100) {
        totalPrice = (totalPrice * 0.90);
    }
    if (typeOfGroup === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice = (totalPrice * 0.95);
    }

    totalPrice = (totalPrice.toFixed(2));
    console.log(`Total price: ${totalPrice}`);

}
solve(30,
    "Students",
    "Sunday"
);