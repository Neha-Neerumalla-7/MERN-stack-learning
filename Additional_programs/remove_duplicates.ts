const text = "programming";

let result = "";

for (const ch of text) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log("Original String:", text);
console.log("After Removing Duplicates:", result);