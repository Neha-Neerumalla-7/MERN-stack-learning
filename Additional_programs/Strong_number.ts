function factorial(n: number): number {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

const number = 145;

let temp = number;
let sum = 0;

while (temp > 0) {
    const digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
}

if (sum === number) {
    console.log(`${number} is a Strong Number`);
} else {
    console.log(`${number} is Not a Strong Number`);
}