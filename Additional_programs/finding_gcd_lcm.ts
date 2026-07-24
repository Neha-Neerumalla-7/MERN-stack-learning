function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

const num1 = 24;
const num2 = 36;

const gcdValue = gcd(num1, num2);
const lcmValue = (num1 * num2) / gcdValue;

console.log("GCD =", gcdValue);
console.log("LCM =", lcmValue);