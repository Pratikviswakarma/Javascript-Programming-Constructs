class Employee {
    constructor(id, salary, gender, date) {
        try {
            // Validate Employee ID (Non-zero Positive Number)
            if (!/^[1-9]\d*$/.test(id)) {
                throw new Error("Invalid Employee ID: Must be a positive non-zero number.");
            }

            // Validate Salary (Non-zero Positive Number)
            if (!/^[1-9]\d*$/.test(salary)) {
                throw new Error("Invalid Salary: Must be a positive non-zero number.");
            }

            // Validate Gender (Only 'M' or 'F')
            if (!/^[MF]$/.test(gender)) {
                throw new Error("Invalid Gender: Must be 'M' or 'F'.");
            }

            // Validate Date (Must not be a Future Date)
            const inputDate = new Date(date);
            const today = new Date();
            if (inputDate > today) {
                throw new Error("Invalid Date: Cannot be a future date.");
            }

            // Assigning values if all validations pass
            this.id = id;
            this.salary = salary;
            this.gender = gender;
            this.date = date;

            console.log("Employee created successfully:", this);
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Test Cases
new Employee(101, 50000, 'M', '2024-02-28');  // ✅ Valid
new Employee(0, 30000, 'F', '2024-02-28');    // ❌ Invalid ID
new Employee(102, 0, 'M', '2024-02-28');      // ❌ Invalid Salary
new Employee(103, 40000, 'X', '2024-02-28');  // ❌ Invalid Gender
new Employee(104, 45000, 'F', '2026-05-01');  // ❌ Invalid Future Date
