const numbers = [1, 2, 3, 5, 6];

const n = numbers.length + 1;

const expectedSum = (n * (n + 1)) / 2;

const actualSum = numbers.reduce((sum, num) => sum + num, 0);

const missingNumber = expectedSum - actualSum;

console.log("Missing Number:", missingNumber);