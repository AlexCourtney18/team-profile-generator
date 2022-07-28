const Employee = require('../lib/Employee.js');

test('creates a new employee', () => {
    const employee = new Employee(name, id, email, role);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect('Employee'));
});