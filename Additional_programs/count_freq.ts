const text = "typescript";

const frequency: { [key: string]: number } = {};

for (const ch of text) {
    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

console.log("Character Frequencies:");

for (const ch in frequency) {
    console.log(`${ch} : ${frequency[ch]}`);
}