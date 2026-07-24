class Student {
    readonly studentId: number;
    name: string;

    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }

    display(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
    }
}

const student = new Student(101, "Neha");

student.display();

// student.studentId = 200;
// Error: Cannot assign to 'studentId' because it is a read-only property.