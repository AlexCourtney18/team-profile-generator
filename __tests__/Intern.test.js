const Intern = require('../lib/Intern.js');

test('creates a new intern', () => {
    const intern = new Intern("Bob", 123, "bob@email.com", "University of Wisconsin" );

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
});