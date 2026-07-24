class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayEmployee(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department:", this.department);
    }
}

const emp = new Employee("Neha", 60000, "IT");

console.log(emp.name);

emp.displayEmployee();

const manager = new Manager("Anjali", 80000, "HR");
manager.showDepartment();