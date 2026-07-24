function isPrime(num: number): boolean {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const number = 17;

if (isPrime(number)) {
    console.log(`${number} is a Prime Number`);
} else {
    console.log(`${number} is Not a Prime Number`);
}