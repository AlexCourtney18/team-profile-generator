const Manager = require('../lib/Manager.js');

test('creates a new manager', () => {
    const manager = new Manager("Bob", 123, "bob@email.com", 456 );

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');
});