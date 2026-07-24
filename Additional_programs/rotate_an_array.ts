const array = [1, 2, 3, 4, 5];
const positions = 2;

const rotatedArray = [
    ...array.slice(positions),
    ...array.slice(0, positions)
];

console.log("Original Array:", array);
console.log("Rotated Array:", rotatedArray);
