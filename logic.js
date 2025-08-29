 class Employee {
    constructor(name, salary, tax) {
        this.id = this.generateId();
        this.name = name;
        this.salary = parseFloat(salary);
        this.tax = parseFloat(tax);
        this.salaryAfterTax = this.calculateSalaryAfterTax();
    }

    generateId() {
        // Generate random 5-digit ID
        return Math.floor(10000 + Math.random() * 90000);
    }

    calculateSalaryAfterTax() {
        return this.salary - (this.salary * this.tax / 100);
    }
}

class EmployeeApp {
    constructor(formId, listId) {
        this.form = document.getElementById(formId);
        this.list = document.getElementById(listId);
        this.employees = [];

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addEmployee();
        });
    }

    addEmployee() {
        const name = document.getElementById("nameField").value;
        const salary = document.getElementById("salaryField").value;
        const tax = document.getElementById("taxField").value;

        if (!name || !salary || !tax) return;

        const newEmployee = new Employee(name, salary, tax);
        this.employees.push(newEmployee);
        this.displayEmployees();
        this.form.reset();
    }

    displayEmployees() {
        this.list.innerHTML = "";

        this.employees.forEach(emp => {
            const li = document.createElement("li");
            li.classList.add("grid", "grid-cols-4", "gap-2", "bg-blue-50", "p-2", "rounded-lg", "shadow-sm");

            li.innerHTML = `
                <span class="font-semibold text-gray-700">ID: ${emp.id}</span>
                <span class="font-medium text-gray-800">${emp.name}</span>
                <span class="text-gray-600">₹${emp.salary.toFixed(2)}</span>
                <span class="text-green-700 font-bold">₹${emp.salaryAfterTax.toFixed(2)}</span>
            `;

            this.list.appendChild(li);
        });
    }
}

// Initialize the app
const app = new EmployeeApp("employeeForm", "employeeList");
