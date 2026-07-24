class Box<T> {

    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello TypeScript");
const booleanBox = new Box<boolean>(true);

numberBox.display();
stringBox.display();
booleanBox.display();