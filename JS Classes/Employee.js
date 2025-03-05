class Employee {
    constructor(id, salary, gender, date) {
        try {
            // Validation for Employee ID (Non-zero Positive Number)
            if (!/^[1-9]\d*$/.test(id)) {
                throw new Error("Invalid Employee ID: ID must be a positive non-zero number.");
            }

            // Validation for Salary (Non-zero Positive Number)
            if (!/^[1-9]\d*$/.test(salary)) {
                throw new Error("Invalid Salary: Salary must be a positive non-zero number.");
            }

            // Validation for Gender (M or F)
            if (!/^[MF]$/.test(gender)) {
                throw new Error("Invalid Gender: Must be 'M' or 'F'.");
            }

            // Validation for Date (Not a Future Date)
            const inputDate = new Date(date);
            const today = new Date();
            if (inputDate > today) {
                throw new Error("Invalid Date: Date cannot be in the future.");
            }

            this.id = id;
            this.salary = salary;
            this.gender = gender;
            this.date = date;
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Test Cases
const emp1 = new Employee(101, 50000, 'M', '2024-02-28'); // Valid
console.log(emp1);

const emp2 = new Employee(0, 30000, 'F', '2024-02-28'); // Invalid ID
const emp3 = new Employee(102, 0, 'M', '2024-02-28'); // Invalid Salary
const emp4 = new Employee(103, 40000, 'X', '2024-02-28'); // Invalid Gender
const emp5 = new Employee(104, 45000, 'F', '2026-05-01'); // Invalid Future Date
