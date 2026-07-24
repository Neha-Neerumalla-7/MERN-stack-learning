function isPrime(num: number): boolean {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const start = 1;
const end = 50;

console.log(`Prime Numbers between ${start} and ${end}:`);

for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}