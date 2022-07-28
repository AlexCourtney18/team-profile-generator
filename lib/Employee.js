class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        return `Employee name: ${this.name}`;
    }

    getId() {
        return `Employee ID: ${this.id}`;
    }

    getEmail() {
        return `Employee Email Address: ${this.email}`;
    }

    getRole() {
        return `${this.role}`;
    }
}

module.exports = Employee;