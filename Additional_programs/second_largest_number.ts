const numbers: number[] = [10, 45, 67, 23, 89, 54];

let largest = -Infinity;
let secondLargest = -Infinity;

for (const num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);