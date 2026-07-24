const number = 153;

let sum = 0;
let temp = number;

while (temp > 0) {
    const digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

if (sum === number) {
    console.log(`${number} is an Armstrong Number`);
} else {
    console.log(`${number} is Not an Armstrong Number`);
}