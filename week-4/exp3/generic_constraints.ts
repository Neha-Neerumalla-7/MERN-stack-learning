interface Constraint {
    length: number;
}

function displayLen<T extends Constraint>(item: T): number {
    return item.length;
}

console.log(displayLen("Hello"));      // 5
console.log(displayLen([5, 6, 7, 8])); // 4