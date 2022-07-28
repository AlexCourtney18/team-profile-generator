class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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